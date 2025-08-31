import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import compression from "vite-plugin-compression";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    compression({ algorithm: "brotliCompress" }), // 👈 adds Brotli (.br) files
    // OR compression({ algorithm: "gzip" }) if your server doesn't support Brotli
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          home: ["./src/pages/Home"],
          blog: ["./src/pages/Blog"],
          blogPost: ["./src/pages/BlogPost"],
          serviceDetail: ["./src/pages/ServiceDetail"],
          careers: ["./src/pages/Careers"],
          about: ["./src/pages/About"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));