<template>
  <div class="pt-4 mx-auto max-w-5xl">
    <h2
      class="font-bold mb-6 text-xl"
      :class="{ 'text-white ': dark, 'text-black': !dark }"
    >
      Contact me:
    </h2>
    <h3
      class="mb-6 text-lg"
      :class="{ 'text-[#cbd5e0] ': dark, 'text-slate-950': !dark }"
    >
      Feel free to reach out to me for any inquiries or collaboration
      opportunities. I'm always open to new projects and challenges.
    </h3>

    <form class="flex flex-col gap-4">
      <label
        for="name"
        class="text-base"
        :class="{ 'text-[#cbd5e0] ': dark, 'text-slate-950': !dark }"
        >Name:</label
      >
      <input
        type="text"
        placeholder="Jon Snow"
        class="p-4 rounded shadow-lg outline-none"
        :class="{
          'text-[#cbd5e0] bg-[#1A202C]': dark,
          'text-slate-950 bg-white': !dark,
        }"
        required
      />

      <label
        for="email"
        class="text-base"
        :class="{ 'text-[#cbd5e0] ': dark, 'text-slate-950': !dark }"
        >Email:</label
      >
      <input
        type="text"
        placeholder="email@example.com"
        class="p-4 rounded shadow-lg outline-none"
        :class="{
          'text-[#cbd5e0] bg-[#1A202C]': dark,
          'text-slate-950 bg-white': !dark,
        }"
        required
      />

      <label
        for="message"
        class="text-base"
        :class="{ 'text-[#cbd5e0] ': dark, 'text-slate-950': !dark }"
        >Message:</label
      >
      <textarea
        placeholder="Enter your message here..."
        class="p-2 rounded block focus:border-green-700 shadow-lg outline-none"
        :class="{
          'text-[#cbd5e0] bg-[#1A202C]': dark,
          'text-slate-950 bg-white': !dark,
        }"
        rows="5"
      ></textarea>

      <div class="flex justify-end items-center mb-4">
        <button
          :class="{
            'text-[#cbd5e0] bg-[#1A202C]': dark,
            'text-slate-950 bg-white': !dark,
          }"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
const { $dark } = useNuxtApp();
const dark = ref($dark);
</script>

<style scoped>
button {
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color: #23c483;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}

button:active {
  transform: translateY(-1px);
}
</style>