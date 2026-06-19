import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://littleacrelearning.com"),
  title: {
    default: "Little Acre Learning — Coloring & activity books for ages 2–10",
    template: "%s · Little Acre Learning",
  },
  description:
    "Warm, wholesome coloring & activity books for children ages 2–10 — speech, counting, tracing, and true facts. Learning that feels like play.",
  openGraph: {
    title: "Little Acre Learning",
    description:
      "Coloring & activity books for ages 2–10. Learning that feels like play.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${baloo.variable} ${nunito.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
