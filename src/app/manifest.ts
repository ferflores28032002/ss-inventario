import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const host = process.env.NEXT_PUBLIC_REDIRECT_URL || "default";

  const shortName = host.includes("dev") ? "Zona de ventas" : "Zona de ventas";

  return {
    theme_color: "#ffffff",
    background_color: "#ffffff",
    icons: [
      {
        src: "favicon.ico",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "favicon.ico",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "favicon.ico",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "favicon.ico",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "favicon.ico",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "favicon.ico",
        sizes: "152x152",
        type: "image/png",
      },
      {
        src: "favicon.ico",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "favicon.ico",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: 'favicon.ico',
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: 'favicon.ico',
        sizes: "512x512",
        type: "image/png",
      },
    ],
    orientation: "portrait",
    display: "standalone",
    dir: "auto",
    lang: "es",
    name: "Zona de ventas",
    short_name: shortName,
    start_url: "/",
    description:
      "Sistema de gestión de inventario y ventas para empresas de distribución y retail",
  };
}
