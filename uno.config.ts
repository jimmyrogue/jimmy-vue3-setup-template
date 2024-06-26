// uno.config.ts
import { defineConfig } from 'unocss';
import presetUno from '@unocss/preset-uno';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
  presets: [presetUno()],
  transformers: [transformerVariantGroup()],
});
