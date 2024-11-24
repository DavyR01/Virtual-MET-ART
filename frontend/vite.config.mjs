import react from "@vitejs/plugin-react";
import path from "path";
// const path = require("path");
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@services": path.resolve(__dirname, "src/services"),
      "@media": fileURLToPath(new URL("./media", import.meta.url)),
    },
  },
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 3000,
  },
});
