import { defineManifest } from "@crxjs/vite-plugin";

export const manifest = defineManifest({
  manifest_version: 3,
  name: "chrome-extension-sample",
  description: "sample",
  version: "0.0.1",
  permissions: ["tabs"],
  action: {
    default_popup: "index.html",
  },
  background: {
    service_worker: "src/background",
    type: "module",
  },
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["src/scripts/addOutline"],
    },
  ],
});
