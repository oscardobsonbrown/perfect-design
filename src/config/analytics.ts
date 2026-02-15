export const umamiConfig = {
  src: process.env.NEXT_PUBLIC_UMAMI_SRC || "https://analytics.umami.is/script.js",
  websiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || "",
  enabled: Boolean(process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID),
};