<template>
  <div
    :class="{
      'place-self-end': project.left,
      'place-self-start': !project.left,
    }"
  >
    <div
      class="relative w-full rounded-lg border-rose-50 bg-slate-950 overflow-hidden transition-transform transform hover:shadow-2xl"
    >
      <NuxtImg
        :src="project.image"
        :alt="project.title"
        class="w-full h-64 object-center opacity-60"
      />
      <div class="absolute inset-0 flex items-center justify-center">
        <span class="text-4xl text-white font-bold">{{ project.title }}</span>
      </div>
      <div
        class="absolute inset-0 bg-slate-900 bg-opacity-75 opacity-0 ease duration-300 hover:opacity-100 transition-opacity flex flex-col justify-between p-4"
      >
        <div>
          <h3 class="text-xl font-bold text-white mb-2 underline">
            {{ project.title }}
          </h3>
          <p class="text-white mb-4">
            {{ project.description }}
          </p>
        </div>
        <div class="flex justify-between items-center">
          <p class="text-white text-sm">
            {{ project.techStack }}
          </p>
          <div class="flex justify-center items-center gap-4">
            <a
              :href="project.liveLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconsLink />
            </a>
            <a
              :href="project.githubLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconsGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: Object,
});

const project = ref(props.project);
</script>

<style  scoped>
</style>