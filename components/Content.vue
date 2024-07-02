<template>
  <div>
    <div class="flex-col flex items-center justify-center mx-80 xl:mx-0">
      <div class="flex items-center justify-center gap-7 lg:flex-col lg:gap-4">
        <h1
          class="text-4xl text-center font-bold"
          :class="{ 'text-white ': dark, 'text-black': !dark }"
        >
          Hello, I'm <span class="text-[#00C48D]">Moaz Ayman</span>
        </h1>
        <img
          src="https://nuxt-portfolio-starter.netlify.app/_nuxt/img/developer.721e2ae.svg"
        />
      </div>
      <p
        class="text-center text-lg my-4 xl:px-6 md:p-1"
        :class="{ 'text-[#cbd5e0] ': dark, 'text-slate-950': !dark }"
      >
        I'm a passionate computer science student from Egypt dedicated to
        mastering full stack development. With a focus on
        <span class="text-[#00C48D]">Node.js</span> for backend development,
        created robust and scalable server-side applications. On the frontend, I
        utilizes the power of
        <span class="text-[#00C48D]">Vue and Nuxt</span> to build dynamic,
        user-friendly interfaces that enhance user experience. My commitment to
        learning and applying modern web technologies positions him as a
        promising developer in the tech industry.
      </p>
      <div class="flex justify-evenly items-center border-b w-full pb-4 mb-4">
        <img
          src="https://nuxt-portfolio-starter.netlify.app/_nuxt/img/code_review.fb0d488.svg"
          class="w-56 lg:w-48"
        />
        <img
          src="https://nuxt-portfolio-starter.netlify.app/_nuxt/img/mind_map.552134e.svg"
          class="w-56 lg:w-48 md:hidden"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { $dark } = useNuxtApp();
const dark = ref($dark);
</script>

<style scoped>
</style>