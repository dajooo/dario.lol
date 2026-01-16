<script setup lang="ts">
const showToast = ref(false);

interface Tech {
  name: string
  level: string
  color: string
}

interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  wip?: boolean
}

const techStack: Tech[] = [
  {name: 'Go', level: 'Primary', color: 'oklch(74.6% 0.16 232.661)'},
  {name: 'Kotlin', level: 'Secondary', color: 'oklch(55.8% 0.288 302.321)'},
  {name: 'Vue/Nuxt', level: 'Frontend', color: 'oklch(59.6% 0.145 163.225)'},
]

const tools: string[] = [
  'PostgreSQL', 'Redis', 'Docker', 'Kubernetes',
  'gRPC', 'REST', 'GraphQL', 'Git', 'Linux', 'CI/CD'
]

const projects: Project[] = [
  {
    title: 'Skela',
    description: 'Fast, modern project initializer. Scaffold any project in seconds using Go templates and custom YAML flows.',
    tech: ['Go', 'Templates', 'YAML'],
    github: 'https://github.com/dajooo/skela',
    wip: true
  },
  {
    title: 'Servling',
    description: 'Container deployment platform that simplifies application management with a modern web interface',
    tech: ['Go', 'Nuxt', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/servling/servling',
    wip: true
  },
  {
    title: 'HTTRPC',
    description: 'Language-agnostic RPC library with code generation for seamless cross-language communication',
    tech: ['Go', 'HTTP', 'Code Generation'],
    github: 'https://github.com/httrpc',
    wip: true
  },
  {
    title: 'gotils',
    description: 'Collection of simple Go utility functions for common operations',
    tech: ['Go'],
    github: 'https://github.com/dajooo/gotils'
  },
  {
    title: 'cloudflare-cli',
    description: 'Command-line interface for managing Cloudflare resources',
    tech: ['Go'],
    github: 'https://github.com/dajooo/cloudflare-cli'
  },
  {
    title: 'better-survival',
    description: 'Minecraft Paper plugin enhancing survival gameplay with quality-of-life improvements',
    tech: ['Kotlin', 'Paper API'],
    github: 'https://github.com/dajooo/better-survival'
  },
  {
    title: 'go-htmx',
    description: 'Go utilities and helpers for working with HTMX',
    tech: ['Go', 'HTMX'],
    github: 'https://github.com/dajooo/go-htmx'
  },
  {
    title: 'valorandom',
    description: 'Valorant random agent and weapon picker for match variety',
    tech: ['TypeScript'],
    github: 'https://github.com/dajooo/valorandom'
  }
]

async function copyDiscordHandle() {
  try {
    await navigator.clipboard.writeText('dajooo');
    showToast.value = true;
    setTimeout(() => showToast.value = false, 3000);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
}
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden">
    <div class="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] pointer-events-none -translate-y-1/2 opacity-50"></div>
    <div class="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none translate-y-1/2 opacity-50"></div>
    <nav class="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 z-50">
      <div class="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" class="text-xl font-bold tracking-tight text-zinc-100 hover:text-white transition-colors">
          Dario
        </a>
        <div class="flex gap-8 text-sm">
          <a href="#about" class="text-zinc-300 hover:text-cyan-400 transition-colors">About</a>
          <a href="#projects" class="text-zinc-300 hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#contact" class="text-zinc-300 hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>

    <section class="pt-32 pb-20 px-6 relative z-10">
      <div class="max-w-5xl mx-auto">
        <div class="space-y-6">
          <div class="inline-block">
            <span class="text-cyan-400 font-medium tracking-wider uppercase text-sm mb-2 block">Hi, I'm Dario</span>
            <h1 class="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[size:300%] animate-gradient pb-2">
              Software Developer
            </h1>
          </div>
          <p class="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
            Building scalable systems and developer tools with Go. Also working with Vue/Nuxt for web interfaces
            and occasionally tinkering with Minecraft modding.
          </p>
          <div class="flex gap-4 pt-4">
            <a
                href="https://github.com/dajooo"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800/40 hover:bg-zinc-800/80 rounded-lg transition-all duration-300 border border-zinc-700/50 hover:border-zinc-500/50 backdrop-blur-sm"
            >
              <Icon name="ri:github-fill" class="w-5 h-5"></Icon>
              GitHub
            </a>
            <a
                href="#contact"
                class="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-lg transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/50 backdrop-blur-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="py-20 px-6 relative">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold mb-8">About Me</h2>
        <div class="grid md:grid-cols-2 gap-10">
          <div class="space-y-4 text-zinc-300 leading-relaxed">
            <p>
              I'm a developer who believes in building tools that just work. My focus is on creating responsive,
              reliable systems, whether that's a high-performance backend service or a polished user interface.
            </p>
            <p>
              I love open source and shipping code that helps other developers move faster. When I'm not writing Go or Vue,
              you'll find me tinkering with Minecraft modding or exploring new tech.
            </p>
          </div>
          <div class="bg-zinc-800/40 rounded-lg p-8 border border-zinc-700/50">
            <h3 class="text-lg font-semibold mb-4 text-cyan-400">What I Do</h3>
            <ul class="space-y-3 text-zinc-300 text-sm">
              <li class="flex items-start gap-3">
                <span class="text-cyan-400 mt-0.5">→</span>
                <span>Design and implement RESTful APIs and RPC systems</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-cyan-400 mt-0.5">→</span>
                <span>Build distributed systems and deployment platforms</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-cyan-400 mt-0.5">→</span>
                <span>Tinker with game server modifications</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-cyan-400 mt-0.5">→</span>
                <span>Create utility libraries and developer tools</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-6">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold mb-8">Tech Stack</h2>
        <div class="grid md:grid-cols-3 gap-6 mb-10">
          <div
              v-for="(tech, index) in techStack"
              :key="index"
              class="bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/30 hover:border-zinc-600/50 transition-all duration-300 group"
          >
            <div class="text-2xl font-bold mb-2 transition-transform duration-300 group-hover:-translate-y-1" :style="{ color: tech.color }">
              {{ tech.name }}
            </div>
            <div class="text-zinc-500 group-hover:text-zinc-400 transition-colors text-sm">{{ tech.level }}</div>
          </div>
        </div>
        <div class="bg-zinc-800/20 rounded-lg p-6 border border-zinc-700/30">
          <div class="flex flex-wrap gap-3">
            <span
                v-for="tool in tools"
                :key="tool"
                class="px-4 py-2 bg-zinc-800/60 rounded-md text-sm text-zinc-300 border border-zinc-700/50"
            >
              {{ tool }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="py-20 px-6 relative">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold mb-4">Projects</h2>
        <p class="text-zinc-400 mb-10">
          A selection of open-source projects and tools I've built, from deployment platforms to utility libraries.
        </p>
        <div class="grid md:grid-cols-2 gap-6">
          <div
              v-for="(project, index) in projects"
              :key="index"
              class="bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/30 hover:border-cyan-500/30 transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/5"
          >
            <div class="flex items-start justify-between mb-3">
              <h3 class="text-lg font-semibold">{{ project.title }}</h3>
              <span v-if="project.wip"
                    class="px-2 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded border border-yellow-500/20 flex-shrink-0">
                WIP
              </span>
            </div>
            <p class="text-zinc-400 text-sm mb-4 leading-relaxed flex-grow">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="px-3 py-1 bg-zinc-900/60 rounded text-xs text-cyan-400 border border-zinc-700/50"
              >
                {{ tech }}
              </span>
            </div>
            <a
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center gap-2 transition-colors mt-auto"
            >
              <Icon name="ri:github-fill" class="w-4 h-4"></Icon>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-20 px-6">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold mb-4">Get In Touch</h2>
        <p class="text-zinc-400 mb-10 text-lg">
          I'm happy to connect and discuss projects or collaborate on open source.
        </p>

        <div class="grid md:grid-cols-2 gap-4">
          <a
              href="https://github.com/dajooo"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 px-6 py-4 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg transition-all duration-300 border border-zinc-700/30 hover:border-zinc-600/50 group"
          >
            <Icon name="ri:github-fill" class="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors"></Icon>
            <span class="text-zinc-400 group-hover:text-zinc-100 transition-colors">dajooo</span>
          </a>
          <a
              href="mailto:hi@dario.lol"
              class="flex items-center gap-3 px-6 py-4 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg transition-all duration-300 border border-zinc-700/30 hover:border-zinc-600/50 group"
          >
            <Icon name="ri:mail-fill" class="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors"></Icon>
            <span class="text-zinc-400 group-hover:text-zinc-100 transition-colors">hi@dario.lol</span>
          </a>
          <a
              href="https://bsky.app/profile/daj.ooo"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 px-6 py-4 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg transition-all duration-300 border border-zinc-700/30 hover:border-zinc-600/50 group"
          >
            <Icon name="ri:bluesky-fill" class="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors"></Icon>
            <span class="text-zinc-400 group-hover:text-zinc-100 transition-colors">@daj.ooo</span>
          </a>
          <button
              @click="copyDiscordHandle"
              class="flex items-center gap-3 px-6 py-4 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg transition-all duration-300 border border-zinc-700/30 hover:border-zinc-600/50 group w-full text-left"
          >
            <Icon name="ri:discord-fill" class="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors"></Icon>
            <span class="text-zinc-400 group-hover:text-zinc-100 transition-colors">@dajooo</span>
          </button>
        </div>
      </div>
    </section>

    <footer class="py-8 px-6 border-t border-zinc-800">
      <div class="max-w-5xl mx-auto text-center text-sm text-zinc-500">
        © 2025 Dario. Built with Vue & Nuxt.
      </div>
    </footer>
    <Transition name="toast">
      <div
          v-if="showToast"
          class="fixed bottom-4 right-4 bg-zinc-800 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2"
      >
        <Icon name="ri:checkbox-circle-fill" class="w-5 h-5 text-green-500" />
        <span>Discord handle copied!</span>
      </div>
    </Transition>
  </div>
</template>

<style>
* {
  scroll-behavior: smooth;
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