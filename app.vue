<script setup lang="ts">
const card = ref<HTMLElement | null>(null);
const showToast = ref(false);

const cardStyle = reactive({
  transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
  transition: 'all 0.3s ease',
});

function handleMouseMove(event: MouseEvent) {
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
  navigator.clipboard
      .writeText(discordHandle)
      .then(() => {
        showToast.value = true;
        setTimeout(() => {
          showToast.value = false;
        }, 3000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
}
</script>

<template>
  <div
      class="min-h-screen bg-zinc-900 flex items-center justify-center p-6"
      @mousemove="handleMouseMove"
      @mouseleave="resetCard"
  >
    <div
        class="max-w-md w-full bg-zinc-900 rounded-md transition-all duration-300 ease-out rainbow-glow"
        ref="card"
        :style="cardStyle"
    >
      <div class="p-8">
        <h1 class="text-4xl font-bold text-zinc-200 mb-4">
          Hey, I'm Dario! 👋
        </h1>
        <p class="text-xl text-zinc-400 mb-6">
          Software developer passionate about crafting elegant solutions with Vue.js/Nuxt and Go.
        </p>
        <div class="space-y-4">
          <div class="flex items-center">
            <Icon name="ph:code-simple" class="h-6 w-6 text-indigo-500 mr-2" />
            <span class="text-zinc-300">Vue.js / Nuxt enthusiast</span>
          </div>
          <div class="flex items-center">
            <Icon name="ph:code-simple" class="h-6 w-6 text-indigo-500 mr-2" />
            <span class="text-zinc-300">Kotlin fanboy</span>
          </div>
          <div class="flex items-center">
            <Icon name="ph:code-simple" class="h-6 w-6 text-indigo-500 mr-2" />
            <span class="text-zinc-300">Go + react newbie</span>
          </div>
        </div>
        <div class="mt-8 flex space-x-4">
          <NuxtLink
              external
              href="https://github.com/dajooo"
              target="_blank"
              class="text-zinc-400 hover:text-zinc-200"
          >
            <Icon name="ph:github-logo" class="w-8 h-8" />
          </NuxtLink>
          <button @click="copyDiscordHandle" class="text-zinc-400 hover:text-zinc-200">
            <Icon name="ph:discord-logo" class="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
    <Transition name="toast">
      <div
          v-if="showToast"
          class="fixed bottom-4 right-4 bg-zinc-800 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2"
      >
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

@property --gradient-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

@keyframes gradient-spin {
  from{
    --gradient-angle: 0deg;
  }
  to{
    --gradient-angle: 360deg;
  }
}

/* Rainbow Glow Shadow Effect */
.rainbow-glow {
  position: relative;
  border: 1px solid transparent;
}

.rainbow-glow::before,
.rainbow-glow::after {
  content: '';
  position: absolute;
  inset: -4px; /* Extend beyond the card boundaries */
  background: conic-gradient(
    from var(--gradient-angle),
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet,
    red
  );
  border-radius: 0.5rem; /* Slightly larger than the card's border-radius */
  z-index: -1;
  animation: 6s gradient-spin linear infinite;
}

.rainbow-glow::after {
  filter: blur(20px); /* Increase blur for a more pronounced glow */
}

.rainbow-glow > div {
  position: relative;
  z-index: 1;
  background: #18181b; /* Match the background color of the card */
  border-radius: 0.375rem;
}
</style>
