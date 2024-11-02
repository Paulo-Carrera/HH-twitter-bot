const fs = require('fs');
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

const usedImagesFile = './used_images.json';
const imageCacheFile = './image_cache.json';

// Function to load used images
function loadUsedImages() {
  try {
    return JSON.parse(fs.readFileSync(usedImagesFile, 'utf8'));
  } catch (error) {
    return [];
  }
}

// Function to save used images
function saveUsedImage(imageUrl) {
  const usedImages = loadUsedImages();
  usedImages.push(imageUrl);
  fs.writeFileSync(usedImagesFile, JSON.stringify(usedImages, null, 2));
}

// Function to load cached images
function loadImageCache() {
  try {
    return JSON.parse(fs.readFileSync(imageCacheFile, 'utf8'));
  } catch (error) {
    return []; // Return an empty array if cache doesn't exist
  }
}

// Function to save new cache
function saveImageCache(images) {
  fs.writeFileSync(imageCacheFile, JSON.stringify(images, null, 2));
}

// Function to get an image from the cache
function getImageFromCache() {
  const cache = loadImageCache();
  return cache.length > 0 ? cache.shift() : null;
}

// Function to update cache after an image is used
function updateImageCache() {
  const cache = loadImageCache();
  cache.shift(); // Remove the first image (used image)
  saveImageCache(cache);
}

// Function to refill the cache if empty
async function refillImageCache() {
  const queries = ['jesus', 'prayer', 'bible', 'jesus%20christ', 'christian%20art'];
  let newImages = [];

  for (let query of queries) {
    try {
      const response = await axios.get(imagesApiUrl, {
        params: { query, per_page: 5 },
        headers: {
          Authorization: imagesApiKey,
        },
      });

      const photos = response.data.photos;
      if (photos.length > 0) {
        newImages = newImages.concat(photos.map(photo => photo.src.large));
      }

      if (newImages.length >= 5) break; // Limit number of new images to store
    } catch (error) {
      console.error('Error fetching images for cache:', error.response?.data || error.message);
    }
  }

  if (newImages.length > 0) {
    saveImageCache(newImages);
    console.log(`Cached ${newImages.length} new images.`);
  } else {
    console.error('Failed to refill image cache.');
  }
}

// Function to fetch a unique image
async function fetchUniqueImage() {
  let imageUrl = getImageFromCache();

  if (!imageUrl) {
    console.log('Cache empty, refilling...');
    await refillImageCache();
    imageUrl = getImageFromCache();
  }

  if (imageUrl) {
    updateImageCache(); // Remove the used image from cache
    console.log('Found a unique cached image:', imageUrl);
    return imageUrl;
  } else {
    throw new Error('No unique images available in cache');
  }
}

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
    console.error('Quote fetch error:', error.response ? error.response.data : error.message);
    throw new Error('Failed to fetch quote');
  }
}

// Retry function for promises
async function retry(fn, retries = 4, delay = 2000) {
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
      const randomImageUrl = await fetchUniqueImage(); // Ensure a unique image
      const filename = 'image.png';

      // Fetch the quote
      const randomQuote = await getQuote();

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
              text: `${randomQuote} ✞`,
              media: {
                media_ids: [mediaId],
              },
            });

            // Post hashtags in a reply
            await twitterClient.v2.tweet({
              text: `#Hashtags\n    #god\n    #gospel\n    #christianity\n    #faith\n    #blessed\n    #prayer\n    #worship\n    #grace\n    #jesus\n    #bible\n    #christ\n    #holy\n    #spirituality\n    #salvation\n    #amen\n    #religion\n    #selfimprovement\n    #fyp\n    #grind\n    #motivation\n    #explore`,
              in_reply_to_tweet_id: mediaId,
            });

            // Save the image URL to prevent reusing it
            saveUsedImage(randomImageUrl);

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
  '*/5 * * * *',
  async () => {
    console.log('Executing scheduled tweet.');
    await tweet();
  },
  null,
  true,
  'America/New_York'
);

console.log('Tweeting process started, will run every 5 minutes.');
cronTweet.start();

