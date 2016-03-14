// I didn't see a contribute in the activity data and I didn't see a collaborate as a skill in the circle nav. Are they the same? They are not quite the same to me. But seems silly to have a contribute circle nav button if it doesn't display any activities.
var collaborate = "Contribute";

var search = "Search";
var navigate = "Navigate";
var synthesize = "Synthesize";
var evaluate = "Evaluate";
var design = "Design";
var compose = "Compose";
var code = "Code";
var revise = "Revise";
var remix = "Remix";
var share = "Share";
var connect = "Connect";
var protect = "Protect";
var open = "Open Practice";

module.exports = [
  {
    name: "Kraken the Code",
    topic: "Read",
    competencies: [search, evaluate],
    skills: ["Problem Solving"],
    imgSrc1x: "/img/pages/web-lit-basics/img-kraken-code.jpg",
    imgSrc2x: "/img/pages/web-lit-basics/img-kraken-code@2x.jpg",
    duration: "60 minutes",
    content: "Learners will use the Internet to solve the mystery of The Kraken, a legendary sea creature, while also learning about search terms, keywords, and how to assess the validity and relevance of web sources.",
    difficulty: "For beginners"
  },
  {
    name: "Ping Kong",
    topic: "Read",
    competencies: [navigate, synthesize],
    skills: ["Communicate"],
    imgSrc1x: "/img/pages/web-lit-basics/img-ping-kong.jpg",
    imgSrc2x: "/img/pages/web-lit-basics/img-ping-kong@2x.jpg",
    duration: "1-2 hours",
    content: "For many, \"the Internet\" is an abstract and overwhelming concept. This activity challenges learners to think concretely about how the internet communicates with a computer.",
    difficulty: "For beginners"
  },
  {
    name: "HTML Puzzle Cubes",
    topic: "Write",
    competencies: [code, remix],
    skills: ["Creativity"],
    imgSrc1x: "/img/pages/web-lit-basics/img-puzzle-boxes.jpg",
    imgSrc2x: "/img/pages/web-lit-basics/img-puzzle-boxes@2x.jpg",
    duration: "45 minutes-1 hour",
    content: "Learners will race to sequence the paper boxes labeled with HTML tags, becoming familiar with the most common HTML tags and how to structure a web page.",
    difficulty: "For beginners"
  },
  {
    name: "Hack the News",
    topic: "Write",
    competencies: [code, compose],
    skills: ["Problem Solving"],
    imgSrc1x: "/img/pages/web-lit-basics/img-hack-news.jpg",
    imgSrc2x: "/img/pages/web-lit-basics/img-hack-news@2x.jpg",
    duration: "45 minutes-1 hour",
    content: "Learners will use X-Ray Goggles to remix a news website, learning about openly-licensed resources, different forms of media, and how to create something new on the Web through remix.",
    difficulty: "For beginners"
  },
  {
    name: "Web Chef",
    topic: "Participate",
    competencies: [connect, open, remix, share],
    skills: ["Communicate"],
    imgSrc1x: "/img/pages/web-lit-basics/img-web-chef.jpg",
    imgSrc2x: "/img/pages/web-lit-basics/img-web-chef@2x.jpg",
    duration: "1-2 hours",
    content: "Learners will teach their peers a skill and document the steps by making a web resource that includes properly attributed open content.",
    difficulty: "For beginners"
  },
  {
    name: "Story of Us",
    topic: "Participate",
    competencies: [collaborate, compose, connect, share],
    skills: ["Communicate", "Creativity"],
    imgSrc1x: "/img/pages/web-lit-basics/img-story-of-us.jpg",
    imgSrc2x: "/img/pages/web-lit-basics/img-story-of-us@2x.jpg",
    duration: "1-2 hours",
    content: "Learners will learn how to tell their Story of Self, use it to reflect on what they have learned, the role of learning socially, and how they want to learn and participate on the web and with their community going forward.",
    difficulty: "For beginners"
  },
  {
    name: "Why do we use the Web?",
    topic: "Participate",
    competencies: [collaborate, evaluate, open, share, remix],
    skills: ["Communicate", "Problem Solving"],
    imgSrc1x: "/img/pages/web-lit-basics-two/why-do-we-use-the-web.png",
    imgSrc2x: "/img/pages/web-lit-basics-two/why-do-we-use-the-web@2x.png",
    duration: "110 minutes-2 hours",
    content: "Learners will create and research survey questions about their community's Web use, learning collaborating, community participation, and open practices.",
    difficulty: "For beginners"
  },
  {
    name: "The Web is a Tool for Learning",
    topic: "Read",
    competencies: [navigate],
    skills: ["Problem Solving"],
    imgSrc1x: "/img/pages/web-lit-basics-two/the-web-is-a-tool-for-learning.jpg",
    imgSrc2x: "/img/pages/web-lit-basics-two/the-web-is-a-tool-for-learning@2x.jpg",
    duration: "2 to 2 ½ hours",
    content: "Learners will use Web-native instructions to make a meme or build a maker project in real life, learning navigating, remixing, and community participation.",
    difficulty: "For beginners"
  },
  {
    name: "Project Playlist",
    topic: "Write",
    competencies: [code, compose, remix, search],
    skills: ["Creativity"],
    imgSrc1x: "/img/pages/web-lit-basics-two/project-playlist.png",
    duration: "70 minutes-90 minutes",
    content: "Learners will build a playlist of songs from the Open Web, learning composing and remixing.",
    difficulty: "For beginners"
  },
  {
    name: "Welcome to My Mixtape",
    topic: "Write",
    competencies: [code, compose, synthesize],
    skills: ["Creativity"],
    imgSrc1x: "/img/pages/web-lit-basics-two/welcome-to-my-mixtape.jpg",
    duration: "90 minutes-2 hours",
    content: "Learners will use Web-native music-production tools and share music through an online community, learning composing, remix, sharing, and community participation.",
    difficulty: "For beginners"
  },
  {
    name: "Pixel Portrait",
    topic: "Write",
    competencies: [compose],
    skills: ["Creativity"],
    imgSrc1x: "/img/pages/web-lit-basics-two/pixel-portrait.png",
    duration: "105 minutes-120 minutes",
    content: "Learners will create their own pixel art, import it into an online code editor, and then insert it into a webpage, learning composing.",
    difficulty: "For beginners"
  },
  {
    name: "#allthezstickerz",
    topic: "Participate",
    competencies: [code, compose, connect, evaluate, open, remix, synthesize],
    skills: ["Communication", "Creativity", "Problem Solving"],
    imgSrc1x: "/img/pages/web-lit-basics-two/allthestickerz.png",
    duration: "3 hours",
    content: "Learners will create pixel art stickers, publish them for others, and use them to annotate and remix the Web, learning community participation, composing, open practices, remix, and sharing.",
    difficulty: "For beginners"
  },
  {
    name: "Who Am I?",
    topic: "Read",
    competencies: [evaluate, navigate, search],
    skills: ["Problem Solving"],
    imgSrc1x: "/img/pages/web-lit-basics-two/who-am-i.png",
    duration: "90 minutes",
    content: "Learners will conduct a reverse image search to find information about a subject online and then revise a webpage with their own text and images, learning composing and search.",
    difficulty: "For beginners"
  },
  {
    name: "Fair Use Free-for-All",
    topic: "Read",
    competencies: [evaluate, navigate, open, search],
    skills: ["Communication", "Problem Solving"],
    imgSrc1x: "/img/pages/web-lit-basics-two/fair-use-free-for-all.png",
    duration: "1-2 hours",
    content: "Learners will compete to identify examples and non-examples of fair use in peers' web remixes, learning credibility, search, and sharing.",
    difficulty: "For beginners"
  },
  {
    name: "The Planets & Accessibility",
    topic: "Write",
    competencies: [code, compose, design, remix],
    skills: ["Communication", "Creativity", "Problem Solving"],
    imgSrc1x: "/img/pages/web-lit-basics-two/the-planets.jpg",
    duration: "110 minutes-2 hours",
    content: "Learners will improve the accessibility of a webpage by changing its color scheme, content, and embedded media, learning composing, designing for accessibility, and remixing.",
    difficulty: "For beginners"
  }
];
