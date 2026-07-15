import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://sportcorepilates.com";

interface SitemapEntry {
  path: string;
  priority?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
}

const entries: SitemapEntry[] = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/start-here", priority: "0.9", changefreq: "monthly" },
  { path: "/scp-method", priority: "0.8", changefreq: "monthly" },
  { path: "/the-studio", priority: "0.8", changefreq: "monthly" },
  { path: "/services", priority: "0.8", changefreq: "monthly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
  { path: "/private-training", priority: "0.7", changefreq: "monthly" },
  { path: "/scp-foundation", priority: "0.6", changefreq: "monthly" },
  { path: "/scp-control", priority: "0.6", changefreq: "monthly" },
  { path: "/scp-performance", priority: "0.6", changefreq: "monthly" },
  { path: "/scp-reform", priority: "0.6", changefreq: "monthly" },
  { path: "/scp-recovery-mobility", priority: "0.6", changefreq: "monthly" },
  { path: "/scp-ante-natal", priority: "0.6", changefreq: "monthly" },
  { path: "/scp-post-natal", priority: "0.6", changefreq: "monthly" },
  { path: "/faqs", priority: "0.6", changefreq: "monthly" },
  { path: "/future-of-movement", priority: "0.6", changefreq: "monthly" },
  { path: "/insights", priority: "0.7", changefreq: "weekly" },
  { path: "/terms-and-conditions", priority: "0.3", changefreq: "yearly" },
  { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
];

function generateSitemap(entries: SitemapEntry[]): string {
  const urls = entries.map((e) => {
    const lines = [`  <url>`, `    <loc>${BASE_URL}${e.path}</loc>`];
    if (e.priority) lines.push(`    <priority>${e.priority}</priority>`);
    if (e.changefreq) lines.push(`    <changefreq>${e.changefreq}</changefreq>`);
    lines.push(`  </url>`);
    return lines.join("\n");
  });

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
    "",
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
