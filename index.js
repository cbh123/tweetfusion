import Replicate from "replicate";
import Twitter from "twitter";
import fs from "fs";
import prompts from "./prompts.js";
import fetch from "node-fetch";
import * as dotenv from "dotenv";

dotenv.config();

async function updateTwitterBanner(bannerUrl) {
  const twitter = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });

  const bannerImage = await fetch(bannerUrl);
  const buffer = await bannerImage.arrayBuffer();
  const bannerString = Buffer.from(buffer).toString("base64");

  twitter.post(
    "account/update_profile_banner", // endpoint
    { banner: bannerString }, // param
    function (error, _tweet, _response) {
      //callback

      if (error) {
        throw error;
      } else {
        console.log("✅ Success! Twitter header image updated.");
      }
    }
  );
}

async function start() {
  const replicate = new Replicate({
    // get your token at https://replicate.com/account
    auth: process.env.REPLICATE_API_TOKEN,
  });

  const prompt = prompts[Math.floor(Math.random() * prompts.length)];

  // Find more models at https://replicate.com/explore
  const models = {
    stableDiffusion:
      "stability-ai/stable-diffusion:328bd9692d29d6781034e3acab8cf3fcb122161e6f5afb896a4ca9fd57090577",
  };

  let input, output;

  // Generate an image from text using Stable Diffusion
  // https://replicate.com/stability-ai/stable-diffusion
  input = { prompt: prompt, image_dimensions: "512x512" };
  console.log(`Generating an image of "${input.prompt}"`);
  output = await replicate.run(models.stableDiffusion, { input });
  console.log(`🖼️ Output: ${output[0]}`);

  const data = fs.readFileSync("outputs.json");
  let outputs = JSON.parse(data);
  outputs.push(output[0]);

  // save to outputs list
  fs.writeFileSync("./outputs.json", JSON.stringify(outputs));

  // updating twitter banner...
  updateTwitterBanner(output[0]);
}

start();
