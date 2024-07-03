<template>
  <nav
    class="flex justify-between items-center py-8 px-4 w-4/6 mx-auto xl:mx-0 xl:w-full"
  >
    <NuxtLink class="text-white font font-bold" href="/">
      <div v-if="dark">
        <img
          src="https://nuxt-portfolio-starter.netlify.app/_nuxt/img/nuxt-logo-white.d377779.svg"
          alt="NuxtJs"
          class="w-32"
          v-motion-slide-top
          :duration="1000"
        />
      </div>
      <div v-else>
        <img
          src="https://nuxt-portfolio-starter.netlify.app/_nuxt/img/nuxt-logo.c15b3bc.svg"
          alt="NuxtJs"
          class="w-32"
          v-motion-slide-top
          :duration="1000"
        />
      </div>
    </NuxtLink>
    <ul class="flex items-center space-x-4 lg:space-x-0 lg:gap-1" v-motion-fade :duration="1000">
      <div v-if="!dark" @click="toggleDark">
        <IconsMoon />
      </div>
      <div v-else @click="toggleDark">
        <IconsSun />
      </div>

      <NuxtLink href="/#projects">
        <li
          class="hover:text-[#00C48D] font-semibold uppercase text-lg cursor-pointer lg:hidden"
          :class="{ 'text-[#cbd5e0]': dark, 'text-black': !dark }"
        >
          Projects
        </li>
      </NuxtLink>
      <NuxtLink href="/#about">
        <li
          class="text-[#cbd5e0] hover:text-[#00C48D] font-semibold uppercase text-lg cursor-pointer lg:hidden"
          :class="{ 'text-[#cbd5e0]': dark, 'text-black': !dark }"
        >
          About
        </li>
      </NuxtLink>
      <NuxtLink href="/#contact">
        <li
          class="text-[#cbd5e0] hover:text-[#00C48D] font-semibold uppercase text-lg cursor-pointer lg:hidden"
          :class="{ 'text-[#cbd5e0]': dark, 'text-black': !dark }"
        >
          Contact
        </li>
      </NuxtLink>
      <div class="lg:block 2xl:hidden">
        <IconsBar @click="dropDown = !dropDown" />
        <div
          v-if="dropDown"
          class="absolute top-16 right-4 bg-slate-950 p-4 rounded-lg shadow-lg"
        >
          <NuxtLink href="/#projects">
            <li
              class="hover:text-[#00C48D] font-semibold uppercase text-lg cursor-pointer"
              :class="{ 'text-[#cbd5e0]': dark, 'text-black': !dark }"
            >
              Projects
            </li>
          </NuxtLink>
          <NuxtLink href="/#about">
            <li
              class="text-[#cbd5e0] hover:text-[#00C48D] font-semibold uppercase text-lg cursor-pointer"
              :class="{ 'text-[#cbd5e0]': dark, 'text-black': !dark }"
            >
              About
            </li>
          </NuxtLink>
          <NuxtLink href="/#contact">
            <li
              class="text-[#cbd5e0] hover:text-[#00C48D] font-semibold uppercase text-lg cursor-pointer"
              :class="{ 'text-[#cbd5e0]': dark, 'text-black': !dark }"
            >
              Contact
            </li>
          </NuxtLink>
        </div>
      </div>
    </ul>
  </nav>
</template>

<script setup>
const { $dark, $toggleDark } = useNuxtApp();
const dark = ref($dark);
const toggleDark = $toggleDark;
const dropDown = ref(false);
</script>
