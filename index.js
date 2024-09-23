const quotes = [
  "Where do you see God working in your life today? Share your blessings with us! ✨🙌 #GodAtWork #GratefulHeart",
  "Need a midweek reminder? Trust in God’s plan, even when it’s hard to understand. 🌿🙏 #FaithInTheUnknown",
  "How has God answered your prayers this week? Comment below, and let’s celebrate His faithfulness! 🎉💖 #AnsweredPrayers",
  "Be still and know that God is in control. 🕊️🌍 Rest in His peace today. #BeStill #PeaceOfGod",
  "When was the last time you prayed for someone else? Lift someone up in prayer today. 🙏💫 #PrayForOthers",
  "God doesn’t make mistakes. Trust that He’s guiding your steps. 🌟👣 #FaithInGod #TrustTheProcess",
  "What scripture are you standing on this season? Share the verses that strengthen your faith! 📖💪 #BibleVerse",
  "The most powerful thing you can do today is pray. Take a moment right now to speak to God. 🙏✨ #PrayerLife",
  "Where have you seen God’s grace in your life recently? Reflect on His endless love. 💖🌿 #Grace #GodIsGood",
  "God is preparing you for greater things. Stay patient, and keep the faith. 🌱🌟 #FaithOverFear",
  "How do you stay grounded in your faith during difficult times? Let’s share ways to hold onto hope. 💡🙏 #FaithAndHope",
  "No matter how tough things get, remember: 'The joy of the Lord is your strength.' 💪💫 Nehemiah 8:10 #BibleQuote",
  "What’s one thing you can praise God for today? Start your day with a heart of gratitude. 🎶❤️ #PraiseGod #ThankfulHeart",
  "God's timing is always perfect. Are you trusting Him with your journey? ⏳🙏 #GodsTiming #Faith",
  "Take your burdens to God in prayer today. His peace surpasses all understanding. 🌿✨ #CastYourCares #GodsPeace",
  "How has God surprised you with unexpected blessings? Share your story in the comments! 🎁🙌 #BlessedBeyondMeasure",
  "When you feel like giving up, remember that God’s strength is made perfect in your weakness. 💪🕊️ #StrengthInChrist",
  "What’s one prayer you’re holding onto this week? Share it with us, and let’s pray together. 🙏💖 #CommunityOfFaith",
  "God's grace is more than enough for whatever you’re facing. Trust Him today. 🌿✨ #GraceUponGrace #TrustInGod",
  "Start your day by giving thanks to God. What are you grateful for this morning? 🌅💖 #MorningGratitude #ThankGod",
  "The Lord is your shepherd. In Him, you lack nothing. 🐑✝️ Psalm 23:1 #BibleQuote #FaithfulGod",
  "Feeling overwhelmed? Take it to God in prayer. He’s always ready to listen. 🌊🕊️ #GodsListening #PrayToday",
  "How has God shown His love to you this week? Let’s share testimonies of His goodness. 🌸💖 #GodIsLove #Testimony",
  "Remember, God’s plans are always greater than our own. Trust Him with your future. ✨💫 #PlanWithGod",
  "Let your faith be bigger than your fear today. Walk boldly with God. 🛡️🦁 #FearlessFaith #CourageInChrist",
  "Take a deep breath and remember: God is in control. No need to worry. 🙌💖 #TrustGod #NoFear",
  "What’s your favorite Bible verse to meditate on? Let’s fill the comments with God’s word! 📖🌟 #BibleVerses",
  "Your story isn’t over yet. God is still writing it. Keep the faith. ✨📖 #FaithJourney #GodsPlan",
  "In the quiet moments, listen for God’s voice. He’s speaking to you today. 🕊️💫 #HearGodsVoice",
  "How has your prayer life deepened lately? Share your experience, and let’s grow together. 🙏💖 #PrayerWarriors",
  "God is a God of second chances. Are you ready to trust Him with a fresh start? 🌅✨ #NewBeginnings #Grace",
  "Every setback is a setup for a comeback with God. Stay encouraged. 💪✨ #ComebackSeason #FaithOverFear",
  "Feeling lost? Remember, 'The Lord will guide you always.' 🛤️🕯️ Isaiah 58:11 #BibleQuote",
  "No prayer is too small for God. Lift it all up to Him today. 🙏💫 #BigAndSmallPrayers #GodHearsYou",
  "What are you trusting God for this season? Share your faith journey with us. 💫📖 #FaithInTheJourney",
  "God’s love never fails. How has His love been evident in your life this week? ❤️🌟 #UnfailingLove #Testify",
  "When was the last time you spent quiet time with God? Make space for Him today. 🕊️💖 #QuietTime #FaithFirst",
  "What miracle are you praying for? Keep believing—God can do the impossible. 🌟🙌 #PrayForAMiracle",
  "Your prayers have power. How can we pray for you today? Share your requests in the comments. 🙏💬 #PrayerRequests",
  "Don’t let fear steal your peace. Surrender it to God, and find rest. 🌊🕊️ #LetGoAndLetGod #PeaceInChrist",
  "God has already gone before you, preparing the way. Trust Him with your steps. 🛤️🌿 #GodsGuidance",
  "Even when things seem uncertain, God’s promises remain true. Hold onto His word. 📖💖 #FaithfulGod #Promises",
  "The joy of the Lord is your strength—keep pressing forward. 💪✨ Nehemiah 8:10 #BibleQuote",
  "You are never alone. God is with you every step of the way. 🕊️👣 #NeverAlone #GodWithUs",
  "When was the last time you saw God’s hand at work? Reflect and share your story! 🌿💫 #GodsHand",
  "Keep praying. God hears every word, even the ones spoken in silence. 🙏✨ #PrayerChangesThings #Faith",
  "You are stronger than you think because God is with you. 💪🦁 #StrengthInChrist #FaithWarrior",
  "With God, all things are possible. What are you trusting Him for today? 🌟🙏 #FaithMovesMountains",
  "Don’t rush God’s process—He’s working it out in His perfect time. ⏳🌿 #GodsTiming #TrustTheJourney",
  "Where have you seen God’s favor lately? Share your testimony in the comments! ✨🙌 #FavoredByGod #Grateful",
  "How has prayer changed your perspective this week? Let’s grow together in faith! 🙏💫 #PrayerLife",
  "God is for you, not against you. Step out in faith today! 🌟💪 #FaithOverFear #TrustGod",
  "What Bible verse are you holding onto during this season of your life? Let’s share God’s word together. 📖💖 #BibleStrength",
  "When was the last time you thanked God for the little things? Reflect and be grateful. 🎁✨ #Gratitude #Blessings",
  "God’s peace is yours for the taking today. Breathe it in. 🌊🕊️ #PeaceBeyondUnderstanding",
  "There’s no storm God can’t calm. What storm are you asking Him to calm in your life? 🌊💖 #GodCalmsStorms",
  "Even when life is hard, God is still good. Trust in His goodness. 🌿💫 #GoodGod #FaithfulAlways",
  "What prayer are you trusting God to answer? Let’s pray in agreement together. 🙏💬 #FaithAndPrayer",
  "God’s word is a lamp to our feet and a light to our path. Keep walking in His light. 🕯️📖 #BibleVerse",
  "No matter what you face today, God is with you. Stay encouraged. 💪✨ #GodWithYou #KeepTheFaith"
];


const { download } = require("./utilities");
require("dotenv").config({ path: __dirname + "/.env" });
const { twitterClient, twitterBearer } = require("./twitterClient.js");
const CronJob = require("cron").CronJob;

// Global variables to track last tweet
let lastQuoteIndex = -1;
let lastImageIndex = -1;

// Function to get a random quote
function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  // Ensure the quote is different from the last one
  while (randomIndex === lastQuoteIndex) {
    randomIndex = Math.floor(Math.random() * quotes.length);
  }
  lastQuoteIndex = randomIndex; // Update last used quote index
  return quotes[randomIndex];
}

// Array of image URLs in the order you want them posted
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
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cb795f8c-fd4f-45af-810b-83e940cf2a08/dfo1sk3-00d78d57-7fc0-47ca-8692-75c9d0d74e64.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NiNzk1ZjhjLWZkNGYtNDVhZi04MTBiLTgzZTk0MGNmMmEwOFwvZGZvMXNrMy0wMGQ3OGQ1Ny03ZmMwLTQ3Y2EtODY5Mi03NWM5ZDBkNzRlNjQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ymlqFG4-L6jnOjYWd4-DnPJywYpGzRHwD0AjVprb2qU",
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
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1b72327f-b103-4f64-a0c4-ba08481d6baf/dftzxd6-b024c132-210b-4275-925a-88e1b059313e.jpg/v1/fill/w_1920,h_1928,q_75,strp/jesus_is_risen_heaven_by_spiritualartneil_dftzxd6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyOCIsInBhdGgiOiJcL2ZcLzFiNzIzMjdmLWIxMDMtNGY2NC1hMGM0LWJhMDg0ODFkNmJhZlwvZGZ0enhkNi1iMDI0YzEzMi0yMTBiLTQyNzUtOTI1YS04OGUxYjA1OTMxM2UuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vA0EVTzzAmN0yDK2ai3Li-5bis1kV9deUHjwrktrM-8",
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

  // Add more image URLs as needed
  // Your array of image URLs (as provided earlier)
];

// Function to get a random image URL
function getRandomImageUrl() {
  let randomIndex = Math.floor(Math.random() * imageUrls.length);
  // Ensure the image URL is different from the last one
  while (randomIndex === lastImageIndex) {
    randomIndex = Math.floor(Math.random() * imageUrls.length);
  }
  lastImageIndex = randomIndex; // Update last used image index
  // console.log(imageUrls[randomIndex]);
  return imageUrls[randomIndex];
}

// Function to tweet with a random image and quote
const tweet = async () => {
  try {
    const randomImageUrl = getRandomImageUrl();
    const filename = "image.png";

    // Download the selected image
    download(randomImageUrl, filename, async function () {
      const randomQuote = getRandomQuote();
      const hashtags = `#god #gospel #christianity #faith #blessed #prayer #worship #grace #jesus #bible #christ #holy #spirituality #salvation #amen #religion #selfimprovement #fyp #grind #motivation #explore`;

      // Upload the image to Twitter
      const mediaId = await twitterClient.v1.uploadMedia(`./${filename}`);

      // Tweet the quote along with the image
      await twitterClient.v2.tweet({
        text: `${randomQuote} ✞\n\n${hashtags}`,
        media: {
          media_ids: [mediaId]
        }
      });

      console.log(`Tweeted: ${randomQuote} with image: ${randomImageUrl}`);
    });
  } catch (e) {
    console.log(e);
  }
};

// Function to like tweets with a specific hashtag
// Function to like tweets with a specific hashtag
const like = async () => {
  try {
    const whereTakenTweets = await twitterBearer.v2.search('#Jesus');
    if (whereTakenTweets.data.data.length === 0) {
      console.log('No tweets found with hashtag #Jesus');
      return;
    }
    for await (const tweet of whereTakenTweets) {
      await twitterClient.v2.like(process.env.APP_ID, tweet.id);
      console.log(`Liked tweet: ${tweet.id}`);
    }
  } catch (e) {
    console.error('Error liking tweets:', e);
  }
};

// Function to retweet a tweet with a specific hashtag
const retweet = async () => {
  try {
    const whereTakenTweets = await twitterBearer.v2.search('#Jesus');
    if (whereTakenTweets.data.data.length === 0) {
      console.log('No tweets found with hashtag #Jesus');
      return;
    }
    const tweetID = whereTakenTweets.data.data[0].id;
    await twitterClient.v2.retweet(process.env.APP_ID, tweetID);
    console.log(`Retweeted tweet: ${tweetID}`);
  } catch (e) {
    console.error('Error retweeting:', e);
  }
};


// Combined function to tweet, like, and retweet
const executeActions = async () => {
  await tweet();
  await like();
  await retweet();
};

console.log('Beginning tweeting process.');
const cronTweet = new CronJob("*/5 * * * *", async () => {
  executeActions();
});

cronTweet.start();