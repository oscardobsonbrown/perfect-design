import Script from "next/script";
import { umamiConfig } from "@/config/analytics";

export function UmamiScript() {
  if (!umamiConfig.enabled) {
    return null;
  }

  return (
    <Script
      src={umamiConfig.src}
      data-website-id={umamiConfig.websiteId}
      strategy="afterInteractive"
    />
  );
}