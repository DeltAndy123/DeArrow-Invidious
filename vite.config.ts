import { defineConfig } from "vite";
import monkey, { MonkeyUserScript } from "vite-plugin-monkey";

const userscript: MonkeyUserScript = {
  name: "userscript-name",
  namespace: "https://github.com/kiangkuang",
  version: "0.0.1",
  description: "userscript description",
  author: "Kiang Kuang",
  match: "https://github.com/*",
  icon: "https://www.google.com/s2/favicons?sz=64&domain=github.com",
  grant: [],
  require: [],
  // add any other userscript headers
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript,
      build: {
        fileName: "script.user.js",
      },
    }),
  ],
});
