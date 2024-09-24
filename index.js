const url = 'https://api.api-ninjas.com/v1/quotes';
const apiKey = 'Tzb8eQRhH7T0+9fUucilZA==WDOis3ptOQJhytTn';
const categories = ['?category=god', '?category=faith'];
const axios = require('axios');

// Function to fetch a quote
async function getQuote() {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const response = await axios.get(url + category, {
    headers: {
      'X-Api-Key': apiKey,
    },
  });
  return response.data[0].quote;
}

const { download } = require('./utilities');
require('dotenv').config({ path: __dirname + '/.env' });
const { twitterClient } = require('./twitterClient.js');
const CronJob = require('cron').CronJob;

let lastImageIndex = -1;

// Array of image URLs
const imageUrls = [
  "https://i.pinimg.com/474x/ec/cb/e1/eccbe19fbd157b12fdee3daf865127b6.jpg",
  "https://img.freepik.com/premium-photo/christian-religion-elements-about-faith-god_23-2150641341.jpg",
  "https://www.bhmpics.com/downloads/of-god-jesus-Wallpapers/4.pfl5syp.jpg",
  "https://academyframesco.com/wp-content/uploads/2021/02/021.-Jose-Zamora-Jesus-on-the-Cross-canvas.jpg",
  "https://i.pinimg.com/736x/61/fd/43/61fd434380d8b8a827c3d1cc46221528.jpg",
  "https://i.pinimg.com/videos/thumbnails/originals/b3/3e/94/b33e94a89ae3af1a4c9ba255db5a3cc5.0000000.jpg",
  "https://m.media-amazon.com/images/I/61JPu03j7WL._AC_UF894,1000_QL80_.jpg",
  "https://e0.pxfuel.com/wallpapers/524/134/desktop-wallpaper-jesus-in-heaven-lds-iphone.jpg",
  "https://images.saatchiart.com/saatchi/1276715/art/6289723/5359493-HSC00001-7.jpg",
  "https://i.pinimg.com/736x/ba/4f/62/ba4f62d6f911799010510bda22821b76.jpg",
  "https://history.churchofjesuschrist.org/bc/content/images/museum/exhibits/atonement-of-christ/The-Resurrected-Christ-Walter-Rane-212294.jpg",
  "https://www.meisterdrucke.us/kunstwerke/1260px/Hendrik_Goltzius_-_Christ_on_the_Cross_with_Mary_StJohn_and_the_Magdalene_%28oil_on_copper%29_-_%28MeisterDrucke-1099732%29.jpg",
  "https://cdn.creazilla.com/illustrations/7181277/spanish-christ-carrying-his-cross-google-art-project-illustration-md.jpeg",
  "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/christ-in-garden-of-gethsemane-graphicaartis.jpg",
  "https://i.pinimg.com/1200x/7b/4e/21/7b4e21f4a432a1fb28dc281b85061fc7.jpg",
  "https://i.pinimg.com/474x/f8/1c/ce/f81cce440261a7390795346d65c31364.jpg",
  "https://cdn.catholic.com/wp-content/uploads/AdobeStock_288633014-900x900.jpeg",
  "https://catholic-daily-reflections.com/wp-content/uploads/2021/01/pray-1492815_1920-1.jpg",
  "https://i.ytimg.com/vi/e9qvo3DUCFQ/hqdefault.jpg",
  "https://spiritualask.com/wp-content/uploads/2024/01/Surrendering-to-the-Divine-Will.jpg",
  "https://christianstt.com/wp-content/uploads/2016/04/Prayer-To-Claim-Jesus-Over-Your-Life.jpg",
  "https://img1.wsimg.com/isteam/ip/f38fe735-e405-4ee8-8881-c6bd3f92833e/7d6dd3d42a326397a10e19be24886186.jpg",
  "https://img.freepik.com/free-photo/close-up-jesus-looking-world_23-2150896415.jpg",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cb795f8c-fd4f-45af-810b-83e940cf2a08/dfo1sk3-00d78d57-7fc0-47ca-8692-75c9d0d74e64.jpg",
  "https://img.freepik.com/premium-photo/jesus-christ-walking-water-storm-ai-generated_778980-2239.jpg",
  "https://i.pinimg.com/564x/62/74/27/627427bc05bfd61647ca0bc4e82f8592.jpg",
  "https://i.pinimg.com/736x/b3/d6/c0/b3d6c096d8ffbfcda5d9f91b8de9b0fa.jpg",
  "https://i.pinimg.com/736x/ce/ae/63/ceae63fdaab86a7efb8bde6b87581cc2.jpg",
  "https://i.pinimg.com/736x/2b/f0/44/2bf0443f895a6545d624e85c503faf39.jpg",
  "https://ssnet.org/wp-content/uploads/2016/09/GoodSalt.com-rhpas1854.jpg",
  "https://img.freepik.com/premium-photo/jesus-christ-way-heaven-3d-illustration-conceptual-image_780672-5130.jpg",
  "https://i.pinimg.com/originals/4f/13/0b/4f130bd16e16af913ac744afe4b87571.jpg",
  "https://i.pinimg.com/236x/95/19/7e/95197e509298e827e675e8db32660978.jpg",
  "https://cdn.pixabay.com/photo/2023/05/24/20/00/ai-generated-8015699_640.jpg",
  "https://i.etsystatic.com/18195780/r/il/3980a1/2676030152/il_1080xN.2676030152_3wc2.jpg",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1b72327f-b103-4f64-a0c4-ba08481d6baf/dftzxd6-b024c132-210b-4275-925a-88e1b059313e.jpg",
  "https://i.pinimg.com/474x/e0/67/85/e06785e273144b0fc044bac9579586c0.jpg",
  "https://images.nightcafe.studio/jobs/W3m2r7PSAIKxmTurbmt3/W3m2r7PSAIKxmTurbmt3--1--4b7d1.jpg?tr=w-1600,c-at_max",
  "https://images.playground.com/6ba337dc311e43cca309d3de7b26fa17.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjCRuwqHirz6iyAxutySBz6kLIw5ES5fHlWymNE_mqjg7-04CvtEBm_c8kl6DKnkeyaO0&usqp=CAU",
  "https://i.pinimg.com/originals/7b/4e/21/7b4e21f4a432a1fb28dc281b85061fc7.jpg",
  "https://img.freepik.com/premium-photo/back-view-resurrected-jesus-christ-ascending-heaven-sky-clouds-god-heaven-second-coming-concept_878453-2076.jpg",
  "https://media.bible.art/ddcaee54-9378-4b89-9efc-e7524d6120ae-thumbnail.jpg",
  "https://media.bible.art/195962ce-d860-4365-be8f-92ccf32d3483-compressed.jpg",
  "https://media.bible.art/85282518-7501-4b02-96ac-a227cc344a58-thumbnail.jpg",
  "https://i.pinimg.com/474x/3b/db/8e/3bdb8e6190d2c947b47b2de4bbb7d05c.jpg"
];

// Function to get a random image URL
function getRandomImageUrl() {
  let randomIndex = Math.floor(Math.random() * imageUrls.length);
  while (randomIndex === lastImageIndex) {
    randomIndex = Math.floor(Math.random() * imageUrls.length);
  }
  lastImageIndex = randomIndex;
  return imageUrls[randomIndex];
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
      const randomImageUrl = getRandomImageUrl();
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
    console.error('Error in tweeting process:', error);
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
