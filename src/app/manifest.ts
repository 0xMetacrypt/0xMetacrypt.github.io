import type { MetadataRoute } from "next";

import { AppConfig } from "@/config/appConfig";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: AppConfig.title,
    short_name: AppConfig.site_name,
    description: AppConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#212121",
    theme_color: "#212121",
    orientation: "any",
    icons: [
      {
        src: "/logo-sq.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
