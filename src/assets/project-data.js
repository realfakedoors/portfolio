import weThrowCourse1 from "./project_screenshots/weThrow/course1.png";
import weThrowCourse2 from "./project_screenshots/weThrow/course2.png";
import weThrowDM from "./project_screenshots/weThrow/DM.png";
import weThrowListings from "./project_screenshots/weThrow/listings.png";

import stageSelection from "./project_screenshots/waldo/stage-selection.png";
import characterMemorization from "./project_screenshots/waldo/characters.png";
import gameplay from "./project_screenshots/waldo/gameplay.png";
import scoreScreen from "./project_screenshots/waldo/score-screen.png";

import storefrontShop from "./project_screenshots/storefront/shop.png";
import storefrontCart from "./project_screenshots/storefront/cart.png";
import storefrontStory from "./project_screenshots/storefront/story.png";

import saguaroCard from "./project_screenshots/saguaro/card.png";
import saguaroNavbar from "./project_screenshots/saguaro/navbar.png";
import saguaroForm from "./project_screenshots/saguaro/form-elements.png";
import saguaroColors from "./project_screenshots/saguaro/default-colors.png";

import skiptracebookLikes from "./project_screenshots/skiptracebook/likes-and-comments.png";
import skiptracebookPage from "./project_screenshots/skiptracebook/company-page.png";
import skiptracebookGroup from "./project_screenshots/skiptracebook/group.png";
import skiptracebookFriendships from "./project_screenshots/skiptracebook/friendships.png";

import chessTitleScreen from "./project_screenshots/chess/title-screen.png";
import chessGameplay from "./project_screenshots/chess/gameplay.png";

const projectData = [
  {
    projectName: "weThrow",
    repoUrl: "https://github.com/realfakedoors/weThrow",
    liveUrl: "https://wethrow.herokuapp.com",
    thoughts:
      "This one’s a doozy already, and there’s still so much I want to add. It’s a full-stack app I made with React and Rails that my buddies and I can use when we go disc golfing. As Odin Project’s big capstone finisher, it really put me through my paces. I had to learn how to authenticate from my API with signed JSON web tokens so I could use them in a custom useContext wrapper. Probably sounds like small potatoes to any developer worth their salt, but I thought it was cool!",
    screenshots: [weThrowCourse1, weThrowCourse2, weThrowDM, weThrowListings],
  },
  {
    projectName: "Tag, You're It!",
    repoUrl: "https://github.com/realfakedoors/waldo",
    liveUrl: "https://tranquil-retreat-21663.herokuapp.com/",
    thoughts:
      "This is a photo tagging game where players can pick subjects from a crowded photo, like a Where's Waldo book. It was my first full-stack app, and really showed me why it's so powerful to be able to back up a dynamic front-end with persistent data.",
    screenshots: [stageSelection, characterMemorization, gameplay, scoreScreen],
  },
  {
    projectName: "storefront",
    repoUrl: "https://github.com/realfakedoors/storefront",
    liveUrl: "https://warm-basin-73358.herokuapp.com/shop",
    thoughts:
      "I’m proud of this one because it was the first time I felt like I really understood the power of useState and useEffect in React, and the first time I got to play around with react-router. I also felt like I made a well-designed and intuitive interface that just feels better than a lot of what’s out there in terms of online shopping.",
    screenshots: [storefrontShop, storefrontCart, storefrontStory],
  },
  {
    projectName: "Saguaro",
    repoUrl: "https://github.com/realfakedoors/saguaro",
    liveUrl: null,
    thoughts:
      "At the end of the CSS unit, Odin bids you to design your own CSS framework and then build a front-end with it. Saguaro was actually a lot of fun to make: I discovered that when you’re designing a framework for others to use, it’s very satisfying, because you get to put yourself in the perspective of another developer rather than a user.",
    screenshots: [saguaroCard, saguaroNavbar, saguaroForm, saguaroColors],
  },
  {
    projectName: "SkipTraceBook",
    repoUrl: "https://github.com/realfakedoors/skip_trace_book",
    liveUrl: "https://skiptracebook.herokuapp.com/",
    thoughts:
      "The final project in the Rails unit, this one had a simple enough premise: 'Build Facebook'. I feel like I made a solid app, despite not knowing a lick of CSS or Javascript at that point. I got to implement all the useful features of facebook: groups, conversations, company pages, messaging. This was the first time I implemented Amazon S3 as well, which really opened the clouds for me.",
    screenshots: [
      skiptracebookLikes,
      skiptracebookPage,
      skiptracebookGroup,
      skiptracebookFriendships,
    ],
  },
  {
    projectName: "chess.rb",
    repoUrl: "https://github.com/realfakedoors/chess",
    liveUrl: null,
    thoughts:
      "Shipping this project was probably the first moment where I felt like I was truly a programmer. Object oriented, refined, unadorned command-line chess. I think I spent three weeks figuring out how to implement the en passant rule. I was introduced to the immense challenge of designing a cohesive and elegant system, and when I finally finished it and all the tests ran green, I felt like Harry Potter when he got his wand.",
    screenshots: [chessTitleScreen, chessGameplay],
  },
];

export default projectData;
