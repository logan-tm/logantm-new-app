import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const defaultConfig = {
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
};

export default defineConfig({
  ...defaultConfig,
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
