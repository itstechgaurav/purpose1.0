import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "assets/",
    assetsDir: "./",
    emptyOutDir: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
