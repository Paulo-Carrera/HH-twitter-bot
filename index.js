const axios = require('axios');
const { download } = require('./utilities');
require('dotenv').config({ path: __dirname + '/.env' });
const { twitterClient } = require('./twitterClient.js');
const CronJob = require('cron').CronJob;

const quotesApiKey = process.env.QUOTES_API_KEY || 'Tzb8eQRhH7T0+9fUucilZA==WDOis3ptOQJhytTn';
const quotesApiUrl = 'https://api.api-ninjas.com/v1/quotes';
const categories = ['?category=god', '?category=faith'];

const imagesApiKey = process.env.PEXELS_API_KEY || 'B2z3NTwI3YWsBSFsDk0TkL01LTqf97LY3xX6vRxE6rSf7wCCcWQRj3BU';
const imagesApiUrl = 'https://api.pexels.com/v1/search';

// Function to fetch a quote
async function getQuote() {
  try {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const response = await axios.get(quotesApiUrl + category, {
      headers: {
        'X-Api-Key': quotesApiKey,
      },
    });
    return response.data[0].quote;
  } catch (error) {
    console.error('Error fetching quote:', error.response?.data || error.message);
    throw new Error('Failed to fetch quote');
  }
}

// Function to fetch a random image from Pexels
async function fetchImage() {
  try {
    const queries = ['god', 'jesus christ', 'faith', 'christian-art'];
    const query = queries[Math.floor(Math.random() * queries.length)];
    const response = await axios.get(imagesApiUrl, {
      params: { query, per_page: 1 },
      headers: {
        Authorization: imagesApiKey,  // Corrected Authorization header
      },
    });
    const photos = response.data.photos;
    if (photos.length > 0) {
      const randomImage = photos[0];  // Fetching first image (as only 1 is requested)
      return randomImage.src.large;  // Adjusted to fetch 'large' version
    } else {
      throw new Error('No images found for the query.');
    }
  } catch (error) {
    console.error('Error fetching image:', error.response?.data || error.message);
    throw new Error('Failed to fetch image');
  }
}

// Retry function for promises
async function retry(fn, retries = 3, delay = 2000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      console.log(`Attempt ${i + 1} failed. Retrying in ${delay / 1000} seconds...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw new Error(`Failed after ${retries} retries.`);
}

// Function to tweet with a random image and quote
const tweet = async () => {
  try {
    await retry(async () => {
      const randomImageUrl = await fetchImage();  // Fetch random image
      const filename = 'image.png';

      // Fetch the quote
      const randomQuote = await getQuote();
      const hashtags = `#god #gospel #christianity #faith #blessed #prayer #worship #grace #jesus #bible #christ #holy #spirituality #salvation #amen #religion #selfimprovement #fyp #grind #motivation #explore`;

      // Download the selected image
      await new Promise((resolve, reject) => {
        download(randomImageUrl, filename, async function (err) {
          if (err) {
            console.error('Error downloading image:', err);
            return reject(err);
          }

          try {
            // Upload the image to Twitter
            const mediaId = await twitterClient.v1.uploadMedia(`./${filename}`);

            // Tweet the quote along with the image
            await twitterClient.v2.tweet({
              text: `${randomQuote} ✞\n\n${hashtags}`,
              media: {
                media_ids: [mediaId],
              },
            });

            console.log(`Tweeted: ${randomQuote} with image: ${randomImageUrl}`);
            resolve();
          } catch (twitterError) {
            console.error('Error posting to Twitter:', twitterError);
            reject(twitterError);
          }
        });
      });
    });
  } catch (error) {
    console.error('Error in tweeting process:', error.message);
  }
};

// CRON job setup to run every 5 minutes (*/5 * * * *)
const cronTweet = new CronJob(
  '*/5 * * * *', // Every 5 minutes
  async () => {
    console.log('Executing scheduled tweet.');
    await tweet();
  },
  null,
  true,
  'America/New_York'
);

console.log('Tweeting process started, will run every 5 minutes.');
cronTweet.start();  // Start the CRON job
