import { AliasOptions, defineConfig } from "vite";
import macrosPlugin from "vite-plugin-babel-macros"
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), macrosPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    } as AliasOptions,
  },
  server: {
    port: 3000,
  }
})
