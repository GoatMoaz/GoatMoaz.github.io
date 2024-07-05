
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.6em"
    height="1.6em"
    viewBox="0 0 22 22"
  >
    <path
      :fill="dark ? '#cbd5e0' : 'black'"
      d="M19 12.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5m0-4.5H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5m0 9H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5"
    ></path>
  </svg>
</template>

<script setup>
const { $dark } = useNuxtApp();
const dark = ref($dark);
</script>

<style scoped>
svg {
  cursor: pointer;
}
</style>