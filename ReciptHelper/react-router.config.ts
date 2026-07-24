import { copyFileSync } from "node:fs";
import { join } from "node:path";
import type { Config } from "@react-router/dev/config";

export default {
  basename: "/ReciptHelper/",
  ssr: false,
  buildEnd({ viteConfig }) {
    if (!viteConfig.isProduction) return;

    // GitHub Pages serves 404.html for client-side routes on a hard refresh.
    const buildPath = viteConfig.build.outDir;
    copyFileSync(
      join(buildPath, "index.html"),
      join(buildPath, "404.html"),
    );
  },
} satisfies Config;
