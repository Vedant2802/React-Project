// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: /\.js$/, // tell Vite to treat .js as JSX
    exclude: /node_modules/, // skip node_modules
  },
});
