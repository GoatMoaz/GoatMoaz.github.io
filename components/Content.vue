<template>
  <div>
    <div class="flex-col flex items-center justify-center mx-80 xl:mx-0">
      <div class="flex items-center justify-center gap-7 lg:flex-col lg:gap-4">
        <h1
          class="text-4xl md:text-2xl text-center font-bold"
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
      <a
        href="/Moaz's resume.pdf"
        class="btn"
        :class="{ 'text-[#cbd5e0]': dark, 'text-[rgb(27, 27, 27)]': !dark }"
        download="Moaz's resume"
      >
        Download my CV</a
      >
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
.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all 0.2s;
  position: relative;
  margin-bottom: 1rem;
}

.btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, 0.5);
}

.btn:active {
  transform: translateY(-3px);
}

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  transition: all 0.3s;
}

.btn:hover::after {
  background-color: #00c48d;
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
}
</style>