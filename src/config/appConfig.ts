export const AppConfig = {
  site_name: "Metacrypt",
  title: "Metacrypt",
  description: "Tools & Services Built for the Decentralized Web",
  locale: "en",
  base: "https://www.metacrypt.org",
} as const;

export const GOOGLE_ANALYTICS_ID = process.env.NODE_ENV === "production" ? "G-5R6ZE713DN" : "";
