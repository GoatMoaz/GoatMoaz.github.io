<template>
  <div>
    <h2
      v-motion-slide-visible-once-left
      :duration="1000"
      class="text-center text-4xl font-bold mb-4 md:text-3xl"
      :class="{ 'text-white ': dark, 'text-black': !dark }"
    >
      My Personal Projects
    </h2>
    <div class="grid grid-cols-2 gap-4 p-4 plg:grid-cols-1">
      <ProjectCard :project="gradientTextGenerator" />
      <ProjectCard :project="nuxtDojo" />
      <ProjectCard :project="ticTacToe" />
      <ProjectCard :project="weatherApp" />
      <ProjectCard :project="landingPage" />
      <ProjectCard :project="reactionTimer" />
    </div>
    <div class="flex justify-center items-center">
      <button class="button" @click="handleClick">
        <IconsGithub />
        See More Projects on Github
      </button>
    </div>

    <div class="border-b my-4 pb-4 w-4/6 mx-auto xl:w-full"></div>
  </div>
</template>

<script setup>
const { $dark } = useNuxtApp();
const dark = ref($dark);

const handleClick = () => {
  if (typeof window !== "undefined") {
    window.open("https://github.com/GoatMoaz", "_blank");
  }
};

class Project {
  constructor(
    title,
    description,
    image,
    techStack,
    liveLink,
    githubLink,
    left,
    id
  ) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.techStack = techStack;
    this.liveLink = liveLink;
    this.githubLink = githubLink;
    this.left = left;
    this.id = id;
  }
}

const gradientTextGenerator = new Project(
  "Gradient Text Generator",
  "Gradient Text Generator is a tool designed to create visually appealing gradient text for various applications.",
  "/gradient-text-generator.png",
  "Nuxt 3 - JS - TailwindCSS - CSS - HTML",
  "https://gradient-text-generator.netlify.app/",
  "https://github.com/GoatMoaz/Gradient-Text-Generator",
  true,
  1
);

const nuxtDojo = new Project(
  "Nuxt Dojo Merch",
  "Nuxt-Dojo is a modern e-commerce website built with Nuxt 3 and Tailwind CSS. It offers a streamlined shopping experience for users and provides an easy-to-use interface for managing products and orders.",
  "/nuxt-dojo.png",
  "Nuxt 3 - JS - TailwindCSS - Apis - CSS - HTML",
  "https://nuxt-dojo-merch.netlify.app/",
  "https://github.com/GoatMoaz/Nuxt-Dojo",
  false,
  2
);

const ticTacToe = new Project(
  "Tic Tac Toe",
  "Tic Tac Toe is a classic game. It offers a fun and interactive experience for users to play against each other.",
  "/tic-tac-toe.png",
  "JS - CSS - HTML",
  "https://goatmoaz.github.io/Tic-Tac-Toe/",
  "https://github.com/GoatMoaz/Tic-Tac-Toe",
  true,
  3
);

const weatherApp = new Project(
  "Weather App",
  "Weather App is a simple application that allows users to check the weather in their area. It provides real-time weather updates and forecasts.",
  "/weather-app.png",
  "Apis - JS - CSS - HTML",
  "https://goatmoaz.github.io/Weather-App/",
  "https://github.com/GoatMoaz/Weather-App",
  false,
  4
);

const landingPage = new Project(
  "Landing Page",
  "Landing Page is a simple and elegant website designed to showcase a product or service. It provides a clean and user-friendly interface for visitors.",
  "/landing-page.png",
  "CSS - HTML",
  "https://goatmoaz.github.io/Landing-Page/",
  "https://github.com/GoatMoaz/Landing-Page",
  true,
  5
);

const reactionTimer = new Project(
  "Reaction Timer",
  "Reaction Timer is a fun and interactive game that tests the user's reaction time. It provides a simple and engaging experience for players.",
  "/reaction-timer.png",
  "Vue - JS - CSS - HTML",
  "https://calm-pasca-2a0d7d.netlify.app/",
  "https://github.com/GoatMoaz/reaction-timer",
  false,
  6
);
</script>

<style scoped>
.button {
  display: flex;
  background-color: rgb(24, 23, 23);
  color: #ffffff;
  padding: 0.5rem 1.4rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  border-radius: 0.5rem;
  gap: 0.75rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: 0.6s ease;
}

.button svg {
  height: 30px;
}

.button:hover {
  box-shadow: none;
  background-color: black;
}
</style>
