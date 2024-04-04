import { defineConfig } from 'vite'
import ViteRails from 'vite-plugin-rails'

export default defineConfig({
  plugins: [
    ViteRails(
      {
        fullReload: {
          additionalPaths: ["config/routes.rb", "app/views/**/*", "app/frontend/javascript/**/*"],
          delay: 200
        },
      }
    ),
  ],
  root: "./app/assets",
  build: {
    manifest: true,
    rollupOptions: {
      input: "/app/javascript/entrypoints/application.js"
    }
  }
})
