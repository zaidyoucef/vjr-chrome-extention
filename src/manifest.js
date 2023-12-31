import { defineManifest } from "@crxjs/vite-plugin";
import packageData from "../package.json" assert { type: "json" };

export default defineManifest({
  name: packageData.name,
  description: packageData.description,
  version: packageData.version,
  manifest_version: 3,
  icons: {
    16: "img/logo-16.png",
    32: "img/logo-34.png",
    48: "img/logo-48.png",
    128: "img/logo-128.png",
  },
  action: {
    default_popup: "popup.html",
    default_icon: "img/logo-48.png",
  },
  options_page: "options.html",
  background: {
    service_worker: "src/background/index.js",
    type: "module",
  },
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["src/content/contentScript.jsx"],
    },
  ],
  web_accessible_resources: [
    {
      resources: ["img/*"],
      matches: ["<all_urls>"],
    },
  ],
  permissions: ["activeTab"],
});
