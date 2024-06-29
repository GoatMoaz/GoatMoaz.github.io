<template>
  <nav class="flex justify-between items-center mx-auto textl py-8 container">
    <NuxtLink class="text-white font font-bold" href="/"
      ><img
        src="https://nuxt-portfolio-starter.netlify.app/_nuxt/img/nuxt-logo-white.d377779.svg"
        alt="NuxtJs"
        class="w-32"
    /></NuxtLink>
    <ul class="flex items-center space-x-4">
      <NuxtLink href="/#projects">
        <li class="text-[#cbd5e0] hover:text-[#00C48D] font-semibold uppercase text-lg cursor-pointer">
          Projects
        </li>
      </NuxtLink>
      <NuxtLink href="/#about">
        <li class="text-[#cbd5e0] hover:text-[#00C48D] font-semibold uppercase text-lg cursor-pointer" >
          About
        </li>
      </NuxtLink>
      <NuxtLink href="/#contact">
        <li class="text-[#cbd5e0] hover:text-[#00C48D] font-semibold uppercase text-lg cursor-pointer">
          Contact
        </li>
      </NuxtLink>
    </ul>
  </nav>
</template>

<script setup>
</script>
