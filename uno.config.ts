import { createRemToPxProcessor } from '@unocss/preset-wind4/utils'
import { defineConfig, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true,
        theme: {
          process: createRemToPxProcessor(),
        },
      },
    }),
  ],
  theme: {
    animation: {
      keyframes: {
        gradient: '{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}',
      },
      durations: {
        gradient: '8s',
      },
      counts: {
        gradient: 'infinite',
      },
    }
  }
})
