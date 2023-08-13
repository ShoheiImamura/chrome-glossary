import { defineManifest } from "@crxjs/vite-plugin";

export const manifest = defineManifest({
  manifest_version: 3,
  name: "chrome-extension-sample",
  description: "sample",
  version: "0.0.1",
  permissions: [
    "tabs",
    "contextMenus",
    "scripting",
    "activeTab",
    "runtime",
    "messagePassing",
  ],
  action: {
    default_popup: "index.html",
  },
  background: {
    service_worker: "src/background",
    type: "module",
  },
  content_scripts: [
    {
      matches: ["https://*/*", "http://*/*"],
      js: ["src/scripts/showTerms", "src/scripts/registerTerm"],
    },
  ],
});
