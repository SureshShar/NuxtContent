import type { Config } from "tailwindcss";

export default <Config>{
  content: [
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./content/**/*.md"
  ],
};
