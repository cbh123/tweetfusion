import Replicate from "replicate";
import Twitter from "twitter";

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
    function (error, tweet, response) {
      //callback

      if (error) throw error;
      console.log(tweet); // Tweet body.
      console.log(response); // Raw response object.
    }
  );
}

// Gets the prompts from https://github.com/replicate/rtv/blob/main/prompts.json
async function getPrompts() {
  const promptsURL = "https://raw.githubusercontent.com/replicate/rtv/main/prompts.json";
  const prompts = await fetch(promptsURL);
  const promptsJSON = await prompts.json();
  return promptsJSON;
}

async function start() {
  const replicate = new Replicate({
    // get your token at https://replicate.com/account
    auth: process.env.REPLICATE_API_TOKEN,
  });

  const prompts = await getPrompts();
  const randomPrompt = prompts

  prompt = prompts[Math.floor(Math.random() * prompts.length)];

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
  console.log(output);

  // updating twitter banner...
  updateTwitterBanner(output[0]);
}

start();