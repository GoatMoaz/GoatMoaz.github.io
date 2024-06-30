<template>
  <div>
    <h2 class="text-white text-center text-4xl font-bold mb-4">
      My Personal Projects
    </h2>
    <div class="inline-grid grid-cols-2 gap-4 place-items-center w-full">
      <ProjectCard :project="gradientTextGenerator" />
      <ProjectCard :project="nuxtDojo" />
      <ProjectCard :project="ticTacToe" />
      <ProjectCard :project="weatherApp" />
      <ProjectCard :project="landingPage" />
      <ProjectCard :project="reactionTimer" />
    </div>
  </div>
</template>

<script setup>
// create a class to store the data of the project card
class Project {
  constructor(
    title,
    description,
    image,
    techStack,
    liveLink,
    githubLink,
    left
  ) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.techStack = techStack;
    this.liveLink = liveLink;
    this.githubLink = githubLink;
    this.left = left;
  }
}

const gradientTextGenerator = new Project(
  "Gradient Text Generator",
  "Gradient Text Generator is a tool designed to create visually appealing gradient text for various applications.",
  "/gradient-text-generator.png",
  "Nuxt 3 - JS - TailwindCSS - CSS - HTML",
  "https://gradient-text-generator.netlify.app/",
  "https://github.com/GoatMoaz/Gradient-Text-Generator",
  true
);

const nuxtDojo = new Project(
  "Nuxt Dojo",
  "Nuxt-Dojo is a modern e-commerce website built with Nuxt 3 and Tailwind CSS. It offers a streamlined shopping experience for users and provides an easy-to-use interface for managing products and orders.",
  "/nuxt-dojo.png",
  "Nuxt 3 - JS - TailwindCSS - Apis - CSS - HTML",
  "https://nuxt-dojo-merch.netlify.app/",
  "https://github.com/GoatMoaz/Nuxt-Dojo",
  false
);

const ticTacToe = new Project(
  "Tic Tac Toe",
  "Tic Tac Toe is a classic game. It offers a fun and interactive experience for users to play against each other.",
  "/tic-tac-toe.png",
  "JS - CSS - HTML",
  "https://goatmoaz.github.io/Tic-Tac-Toe/",
  "https://github.com/GoatMoaz/Tic-Tac-Toe",
  true
);

const weatherApp = new Project(
  "Weather App",
  "Weather App is a simple application that allows users to check the weather in their area. It provides real-time weather updates and forecasts.",
  "/weather-app.png",
  "Apis - JS - CSS - HTML",
  "https://goatmoaz.github.io/Weather-App/",
  "https://github.com/GoatMoaz/Weather-App",
  false
);

const landingPage = new Project(
  "Landing Page",
  "Landing Page is a simple and elegant website designed to showcase a product or service. It provides a clean and user-friendly interface for visitors.",
  "/landing-page.png",
  "CSS - HTML",
  "https://goatmoaz.github.io/Landing-Page/",
  "https://github.com/GoatMoaz/Landing-Page",
  true
);

const reactionTimer = new Project(
  "Reaction Timer",
  "Reaction Timer is a fun and interactive game that tests the user's reaction time. It provides a simple and engaging experience for players.",
  "/reaction-timer.png",
  "Vue - JS - CSS - HTML",
  "https://calm-pasca-2a0d7d.netlify.app/",
  "https://github.com/GoatMoaz/reaction-timer",
  false
);
</script>

<style  scoped>
</style>