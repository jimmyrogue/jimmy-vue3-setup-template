import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// main.ts
import "virtual:uno.css";
import "@unocss/reset/normalize.css";
import "@unocss/reset/tailwind.css";

createApp(App).mount("#app");
