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
var contribute = "Contribute";
var connect = "Connect";
var protect = "Protect";
var open = "Open Practice";

module.exports = [
  {
    name: "Problem-Solving",
    content: "Formulating problems, and developing and testing solutions through research, analysis, rapid prototyping, and feedback.",
    imgSrc1x: "/img/pages/web-literacy/21cskills/21c-skill-icon_problem-solving.svg",
    topics: {
      "Read": [search, navigate, synthesize, evaluate],
      "Write": [design, compose, code, revise, remix],
      "Participate": [share, contribute, connect, protect, open]
    }
  },
  {
    name: "Creativity",
    content: "Generating, connecting, synthesizing, transforming, and refining new and existing ideas.",
    imgSrc1x: "/img/pages/web-literacy/21cskills/21c-skill-icon_creativity.svg",
    topics: {
      "Write": [design, revise, remix],
      "Participate": [share, contribute, open]
    }
  },
  {
    name: "Communication",
    content: "Presenting messages effectively using oral, written, and nonverbal signals.",
    imgSrc1x: "/img/pages/web-literacy/21cskills/21c-skill-icon_communication.svg",
    topics: {
      "Read": [synthesize],
      "Write": [compose, remix],
      "Participate": [share, contribute, connect, open]
    }
  },
  {
    name: "Collaboration",
    content: "Interacting and working appropriately with diverse audiences and teams; demonstrating active listening, interacting and contributing constructively in group discussions and meetings; using appropriate technology tools for working together including resolving conflicts on group projects; and sharing responsibility for group work and valuing individual contributions.",
    imgSrc1x: "/img/pages/web-literacy/21cskills/21c-skill-icon_collaboration.svg",
    topics: {
      "Participate": [share, contribute, connect, open]
    }
  }
];
