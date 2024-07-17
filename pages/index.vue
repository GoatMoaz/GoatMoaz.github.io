<template>
  <div
    class="h-full"
    :class="{
      'bg-white': !dark,
      'bg-[#0D2438]': dark,
    }"
  >
    <Nav />
    <Content />
    <Projects id="projects" class="scroll-mt-20 lg:scroll-mt-28" />
    <About id="about" class="scroll-mt-20 lg:scroll-mt-28" />
    <div
      :class="{
        'bg-slate-100': !dark,
        'bg-[#102C44]': dark,
      }"
    >
      <Contact id="contact" class="scroll-mt-20 lg:scroll-mt-28" />
    </div>
    <div class="bg-[#2F855A]">
      <Footer />
    </div>
  </div>
</template>

<script setup>
const { $dark } = useNuxtApp();
const dark = ref($dark);
</script>

<style scoped>
</style>