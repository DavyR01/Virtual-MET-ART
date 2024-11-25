import react from "@vitejs/plugin-react";
import path from "path";
// const path = require("path");
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@services": path.resolve(__dirname, "src/services"),
      "@media": path.resolve(__dirname, "media"),
      "@public": path.resolve(__dirname, "public"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 3000,
    //  fs: {
    //    allow: ["./media"],
    //  },
  },
});
