import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1C2C",
        slateDeep: "#2C3E50",
        silver: "#B9C3CF"
      }
    },
  },
  plugins: [],
}
export default config
