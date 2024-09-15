<script setup lang="ts">
const card = ref(null);
const showToast = ref(false);

const cardStyle = reactive({
  transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
  transition: 'all 0.3s ease',
});

function handleMouseMove(event) {
  if (card.value) {
    const rect = card.value.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateY = ((event.clientX - centerX) / window.innerWidth) * 10;
    const rotateX = ((centerY - event.clientY) / window.innerHeight) * 10;

    cardStyle.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    cardStyle.transition = 'all 0.1s ease';
  }
}

function resetCard() {
  cardStyle.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  cardStyle.transition = 'all 0.3s ease';
}

async function copyDiscordHandle() {
  const discordHandle = 'dajooo';
  navigator.clipboard.writeText(discordHandle)
      .then(() => {
        showToast.value = true;
        setTimeout(() => {
          showToast.value = false;
        }, 3000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-6"
       @mousemove="handleMouseMove" @mouseleave="resetCard">
    <div class="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ease-out"
         ref="card" :style="cardStyle">
      <div class="p-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Hey, I'm Dario! 👋</h1>
        <p class="text-xl text-gray-600 mb-6">Software developer passionate about crafting elegant solutions with
          Vue.js, Nuxt, and Kotlin.</p>
        <div class="space-y-4">
          <div class="flex items-center">
            <Icon name="ph:code-simple" class="h-6 w-6 text-indigo-500 mr-2"/>
            <span class="text-gray-700">Vue.js / Nuxt enthusiast</span>
          </div>
          <div class="flex items-center">
            <Icon name="ph:code-simple" class="h-6 w-6 text-indigo-500 mr-2"/>
            <span class="text-gray-700">Kotlin aficionado</span>
          </div>
        </div>
        <div class="mt-8 flex space-x-4">
          <NuxtLink external href="https://github.com/dajooo" target="_blank" class="text-gray-400 hover:text-gray-600">
            <Icon name="ph:github-logo" class="w-8 h-8"/>
          </NuxtLink>
          <button @click="copyDiscordHandle" class="text-gray-400 hover:text-gray-600">
            <Icon name="ph:discord-logo" class="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
    <Transition name="toast">
      <div v-if="showToast" class="fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
        <Icon name="ph:check-circle" class="w-5 h-5 text-green-500" />
        <span>Discord handle copied!</span>
      </div>
    </Transition>
  </div>
</template>

<style>
@import url('https://api.fonts.coollabs.io/css2?family=Inter:wght@400;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>