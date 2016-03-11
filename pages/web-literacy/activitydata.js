// Starting to use a variable for this.
var open = "Open Practice";

// I didn't see a contribute in the activity data and I didn't see a collaborate as a skill in the circle nav. Are they the same? They are not quite the same to me. But seems silly to have a contribute circle nav button if it doesn't display any activities.
var collaborate = "Contribute";

module.exports = [
  {
    name: "Kraken the Code",
    topic: "Read",
    competencies: ["Search", "Evaluate"],
    skills: ["Problem Solving"],
  },
  {
    name: "Ping Kong",
    topic: "Read",
    competencies: ["Navigate", "Synthesize"],
    skills: ["Communicate"],
  },
  {
    name: "HTML Puzzle Cubes",
    topic: "Write",
    competencies: ["Code", "Remix"],
    skills: ["Creativity"],
  },
  {
    name: "Hack the News",
    topic: "Write",
    competencies: ["Code", "Compose"],
    skills: ["Problem Solving"],
  },
  {
    name: "Web Chef",
    topic: "Participate",
    competencies: ["Connect", open, "Remix", "Share"],
    skills: ["Communicate"],
    duration: "1-2 hours",
    content: "ohh hi",
    difficulty: "For beginners"
  },
  {
    name: "Story of Us",
    topic: "Participate",
    competencies: [collaborate, "Compose", "Connect", "Share"],
    skills: ["Communicate", "Creativity"],
  },
  {
    name: "Why do we use the Web?",
    topic: "Participate",
    competencies: [collaborate, "Evaluate", open, "Share", "Remix"],
    skills: ["Communicate", "Problem Solving"],
  },
  {
    name: "The Web is a Tool for Learning",
    topic: "Read",
    competencies: ["Navigate"],
    skills: ["Problem Solving"],
  },
  {
    name: "Project Playlist",
    topic: "Write",
    competencies: ["Code", "Compose", "Remix", "Search"],
    skills: ["Creativity"],
  },



// Unfinished
  {
    name: "Welcome to My Mixtapw",
    topic: "Write",
    competencies: ["Code", "Compose", "Synthesize"],
    skills: ["Creativity"],
  },
  {
    name: "Pixel Portrait",
    topic: "Write",
    competencies: ["Compose"],
    skills: ["Creativity"],
  },
  {
    name: "#allthezstickerz",
    topic: "Write",
    competencies: ["Code", "Compose", "Connect", "Evaluate", open, "Remix", "Synthesize"],
    skills: ["Creativity"],
  },
  {
    name: "Who Am I?",
    topic: "Write",
    competencies: ["Evaluate", "Navigate", "Search"],
    skills: ["Creativity"],
  },
  {
    name: "Fair Use Free-for-All",
    topic: "Write",
    competencies: ["Evaluate", "Navigate", open, "Search"],
    skills: ["Creativity"],
  },
  {
    name: "The Planets & Accessibility",
    topic: "Write",
    competencies: ["Code", "Compose", "Design", "Remix"],
    skills: ["Creativity"],
  }
];
