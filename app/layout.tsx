import type { Metadata, Viewport } from "next";
import { Google_Sans_Flex, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { profile, site } from "@/lib/content";

// Material You's own typeface. The optical-size axis keeps big headings tight and body text open.
const googleSansFlex = Google_Sans_Flex({
  variable: "--font-gsf",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

// Only for terminal output in the hero's test rig.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: site.url }],
  keywords: [
    "LLM evaluation",
    "coding agent evaluation",
    "SWE-bench",
    "AI evaluation engineer",
    "freelance AI evaluation",
    "evaluation tasks",
    "reward hacking",
    "rubric design",
    "agent trajectory review",
    "backend engineer",
    "distributed systems",
    "Bengaluru",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "profile",
    url: site.url,
    siteName: profile.name,
    title: site.title,
    description: site.description,
    locale: "en_IN",
    images: [
      {
        url: `${site.url}og.png`,
        width: 1200,
        height: 630,
        alt: `${profile.name}, ${profile.headline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [`${site.url}og.png`],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcf8f2" },
    { media: "(prefers-color-scheme: dark)", color: "#18120e" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${googleSansFlex.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
