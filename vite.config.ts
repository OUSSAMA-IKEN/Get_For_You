import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Remplace 'nom-du-repo' par le nom exact de ton repo GitHub
const repoName = "/Get_For_You";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? repoName : "/",
  build: {
    outDir: "dist"
  },
  server: {
    host: "::",
    port: 8080
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
}));
