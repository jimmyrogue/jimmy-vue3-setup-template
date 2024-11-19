import presetUno from '@unocss/preset-uno'
import transformerVariantGroup from '@unocss/transformer-variant-group'
// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  transformers: [transformerVariantGroup()],
})
