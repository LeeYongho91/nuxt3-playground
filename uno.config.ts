import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray:50',
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
  ],
});
