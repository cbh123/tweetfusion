# TweetFusion

Update your Twitter header image with generative AI.

Powered by [Replicate](https://replicate.com?utm_source=project&utm_campaign=tweetfusion), a platform for running machine learning models in the cloud.


## How to use it

To run TweetFusion, you'll need a Replicate account and an API key:

##### Get your Replicate token
1. Create a Replicate account at [replicate.com](https://replicate.com?utm_source=project&utm_campaign=replit-node). This is quick and easy, as you can use your existing GitHub account to sign in.
2. Grab your Replicate API token from [replicate.com/account](https://replicate.com/account?utm_source=project&utm_campaign=replit-node)


##### Generate Twitter secrets
Then, you'll need to setup your Twitter API access:
1. Create a free [Twitter developer account](https://developer.twitter.com). (Hopefully this is still free by the time you're reading this)
2. Set up User Authentication so your developer account has read and write access:

<img width="668" alt="Screenshot 2023-03-29 at 5 07 23 PM" src="https://user-images.githubusercontent.com/14149230/228913474-124d7306-c737-4c00-9dc2-836666c5db03.png">

Choose these settings. For now, use dummy URLs for the OAuth 2.0 and callback URLs.

<img width="632" alt="Screenshot 2023-03-29 at 5 08 10 PM" src="https://user-images.githubusercontent.com/14149230/228913670-c800bbc7-b26f-40a9-a1ff-49e1b26a83d7.png">

Save your client keys to a password manager.

3. Next, create an API Key and Secret:

<img width="1144" alt="Screenshot 2023-03-29 at 5 05 13 PM copy" src="https://user-images.githubusercontent.com/14149230/228914188-3807ecdd-c540-431c-ad07-ea298ecb66c1.png">

The key will be your `TWITTER_CONSUMER_KEY`, and the secret will be your `TWITTER_CONSUMER_SECRET`.

4. Finally, create an Access Token and Secret. Make sure that the permissions say read and write:

<img width="649" alt="Screenshot 2023-03-29 at 5 14 34 PM copy" src="https://user-images.githubusercontent.com/14149230/228914395-36f32886-4792-4bf4-b3fa-f80ded223675.png">

The access token will be your `TWITTER_ACCESS_TOKEN_KEY` and the secret will be your `TWITTER_TOKEN_SECRET`.

5. Phew! That was tedious. You should now have all the secrets you need from Twitter.

##### Run!

Now, add all your secrets to your Repl.

If you're running on Replit:
Click the 🔒 **Secrets** button in the Tools sidebar, then secrets for your `REPLICATE_API_TOKEN`, `TWITTER_CONSUMER_KEY`, `TWITTER_CONSUMER_SECRET`, `TWITTER_ACCESS_TOKEN_KEY` and `TWITTER_TOKEN_SECRET`.

Otherwise, put the secrets in a `.env` file that is .gitignored.

Finally, run it with `npm run start`.

<img width="896" alt="Screenshot 2023-04-27 at 4 26 00 PM" src="https://user-images.githubusercontent.com/14149230/234982903-f685a905-489e-45d7-8bde-8e4fd8449e86.png">

## See also:

- [Build a website with Next.js and Replicate](https://replicate.com/docs/get-started/nextjs?utm_source=project&utm_campaign=replit-node)
- [Build a Discord bot](https://replicate.com/docs/get-started/discord-bot?utm_source=project&utm_campaign=replit-node)


See [Replit's docs on Secrets](https://docs.replit.com/programming-ide/workspace-features/storing-sensitive-information-environment-variables) if you need more guidance here.
- [Replicate API docs](https://replicate.com/docs/reference/http?utm_source=project&utm_campaign=replit-node)
