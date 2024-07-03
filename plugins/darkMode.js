export default defineNuxtPlugin( app => {
  const dark = ref(true);

  const toggleDark = () => {
    dark.value = !dark.value;
  };

  app.provide("dark", dark);
  app.provide("toggleDark", toggleDark);
});