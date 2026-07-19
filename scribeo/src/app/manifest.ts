import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    // TODO(T7): CD-approved description.
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0B0B0D",
    theme_color: "#0B0B0D",
    // TODO(assets): real icon files (192, 512, maskable) in /public/icons.
    icons: [],
  };
}
