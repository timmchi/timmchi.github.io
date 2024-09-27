import kinology1 from "../screenshots/kinology/1-min.jpg";
import kinology2 from "../screenshots/kinology/2-min.jpg";
import kinology3 from "../screenshots/kinology/3-min.jpg";
import kinology4 from "../screenshots/kinology/4-min.jpg";
import kinology5 from "../screenshots/kinology/5-min.jpg";

import bossanova1 from "../screenshots/bossanova/1.jpg";
import bossanova2 from "../screenshots/bossanova/2.jpg";
import bossanova3 from "../screenshots/bossanova/3.jpg";
import bossanova4 from "../screenshots/bossanova/4.jpg";

import guessr1 from "../screenshots/guessr/first.png";
import guessr2 from "../screenshots/guessr/second.png";
import guessr3 from "../screenshots/guessr/third.png";
import guessr4 from "../screenshots/guessr/fourth.png";
import guessr5 from "../screenshots/guessr/fifth.png";
import guessr6 from "../screenshots/guessr/sixth.png";
import guessr7 from "../screenshots/guessr/seventh.png";

export const projects = [
  {
    id: 1,
    name: "Kinology",
    images: [
      {
        url: kinology2,
        projectName: "Kinology",
      },
      {
        url: kinology1,
        projectName: "Kinology",
      },
      {
        url: kinology3,
        projectName: "Kinology",
      },
      {
        url: kinology4,
        projectName: "Kinology",
      },
      {
        url: kinology5,
        projectName: "Kinology",
      },
    ],
    description: "Search for, like and comment on movies",
    detailedDescription: [
      "Kinology allows users to search for movies based on a keyword or using a detailed advanced search. If a user creates an account, they can comment on movies, add movies to their profile (to watch list/favorite list) and also comment on other users' profiles.",
      "Kinology uses TMDB API in the backend, so the amount of movies discoverable is pretty much unlimited.",
      "I created Kinology as a submission to the Fullstack open, and successfully received 10 credits for it.",
      "Working on this app allowed me to practice React and Node, and implement what I learned in Fullstack open course. The app is pretty well tested, and features around 200 tests, including unit tests, integration tests and e2e tests using Playwright. It also includes a CI/CD pipeline that uses these tests and deploys the new versions of Kinology to render automatically.",
      "I truly learned a lot while creating Kinology, and most importantly, it gave me confidence to continue creating projects and learning more.",
    ],
    technologiesUsed: [
      "React",
      "Node",
      "MUI",
      "MongoDB",
      "TMDB API",
      "Playwright",
    ],
    learningOutcomes: [
      "Became much more confident using React and Node",
      "Practiced working with external APIs",
      "Gained experience with using different libraries, such as React Hook Form and Valibot",
      "Learned a lot about CSS, MUI and responsive design",
      "Practiced deploying and testing a complex web app and setting up CI/CD pipeline for this process",
    ],
    link: "https://kinology-movie-app.onrender.com",
    github: "https://github.com/timmchi/kinology-movie-app",
  },
  {
    id: 2,
    name: "Bossanova Breakfast",
    images: [
      {
        url: bossanova1,
        projectName: "Bossanova",
      },
      {
        url: bossanova2,
        projectName: "Bossanova",
      },
      {
        url: bossanova3,
        projectName: "Bossanova",
      },
      {
        url: bossanova4,
        projectName: "Bossanova",
      },
    ],
    description: "Radio station and breakfast selection based on location",
    detailedDescription: [
      "Bossanova Breakfast allows users to select a bossanova radio station, and then choose out of the highest rated breakfast restaurants/cafes in the city of their choosing while listening to chill tunes.",
      "It utilizes Google Maps API and Radio Browser API for core functionality.",
      "It is currently a work in progress, which is why it is not deployed yet, however, the project is nearing its completion. The main functionality is working, though, and the code is available in the github repository.",
    ],
    technologiesUsed: ["React", "React Query", "Google Maps API", "MUI"],
    learningOutcomes: [
      "Practiced using Google Maps API with React",
      "Learned a lot about different Google APIs and their functionality (Maps, Places)",
      "Gained experience in using Google Cloud Services",
      "Practiced React Query in a real project",
    ],
    link: "https://github.com/timmchi/bossanova-breakfast",
    github: "https://github.com/timmchi/bossanova-breakfast",
  },
  {
    id: 3,
    name: "Place Guesser WIP",
    images: [
      {
        url: guessr1,
        projectName: "Guessr",
      },
      {
        url: guessr2,
        projectName: "Guessr",
      },
      {
        url: guessr3,
        projectName: "Guessr",
      },
      {
        url: guessr4,
        projectName: "Guessr",
      },
      {
        url: guessr5,
        projectName: "Guessr",
      },
      {
        url: guessr6,
        projectName: "Guessr",
      },
      {
        url: guessr7,
        projectName: "Guessr",
      },
      //   {
      //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-j7TRghl9jpykKcP7QHZPz8dl0dk_Um49w&s",
      //     projectName: "Guessr",
      //   },
      //   {
      //     url: "https://pbs.twimg.com/profile_images/1534365794074755073/ClZmdMG8_400x400.jpg",
      //     projectName: "Guessr",
      //   },
    ],
    description: "Guess a location based on a google street view",
    detailedDescription: [
      "Coming soon :)",
      "Github repository is not yet available",
      "There is a deployed demo available in which you can play either the single player mode or duel another player!",
    ],
    technologiesUsed: [
      "React",
      "Node",
      "Google Maps API",
      "Tailwind",
      "Sockets.io",
      "Redux Toolkit",
    ],
    learningOutcomes: [
      "Implemented real-time game logic from scratch using socket.io",
      "Practiced complex state management with Redux",
      "Tried my best to utilize 'You might not need an effect'",
      "Gained more exposure to Google Maps API",
      "Gained a better understanding of React Google Maps library",
    ],
    link: "https://backend-placeguessr-4654.fly.dev/",
    github: "https://github.com/timmchi/",
  },
];
