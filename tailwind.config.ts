import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "background-dark": "#2E3440",
        "background-dim": "#3B4252",
        "background": "#434C5E",
        "background-light": "#4C566A",

        "text-dim": "#D8DEE9",
        "text": "#E5E9F0",
        "text-light": "#ECEFF4",

        "secondary": "#5E81AC",
        "primary": "#88C0D0",
        "accent": "#BF616A",
      }
    },
  },
  plugins: [],
}
export default config
