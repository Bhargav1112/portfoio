import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageWrapper } from "@/components/page-wrapper";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhargav Bhakhar | Frontend Developer & Team Leader",
  description:
    "Bhargav Bhakhar is a passionate frontend developer with 4 years of experience, specializing in building responsive, high-performance web applications using React.js, Next.js, TypeScript, and modern UI frameworks.",
  keywords: [
    "Frontend Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Team Leader",
    "Web Developer",
    "Bhargav Bhakhar",
    "Surat",
  ],
  authors: [{ name: "Bhargav Bhakhar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhargavbhakhar.dev",
    title: "Bhargav Bhakhar | Frontend Developer & Team Leader",
    description:
      "Passionate frontend developer with 4 years of experience, specializing in building responsive, high-performance web applications.",
    siteName: "Bhargav Bhakhar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhargav Bhakhar | Frontend Developer & Team Leader",
    description:
      "Passionate frontend developer with 4 years of experience, specializing in building responsive, high-performance web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <PageWrapper>
            <div className="relative min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </PageWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
