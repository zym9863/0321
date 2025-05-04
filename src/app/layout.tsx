import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3月21日 - 春分特别日",
  description: "探索3月21日的特殊意义：春分、星座交界以及多个国际纪念日",
  manifest: "/manifest.json",
  themeColor: "#3b82f6",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "3月21日",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-gradient-to-r from-blue-500 to-green-400 text-white p-4 shadow-md">
          <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="text-xl font-bold mb-2 md:mb-0 hover:text-yellow-200 transition-colors">
              3月21日 - 春分特别日
            </Link>
            <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
              <li><Link href="/forest" className="hover:text-yellow-200 transition-colors">国际森林日</Link></li>
              <li><Link href="/color" className="hover:text-yellow-200 transition-colors">国际色彩日</Link></li>
              <li><Link href="/poetry" className="hover:text-yellow-200 transition-colors">世界诗歌日</Link></li>
              <li><Link href="/anti-racism" className="hover:text-yellow-200 transition-colors">消除种族歧视日</Link></li>
              <li><Link href="/down-syndrome" className="hover:text-yellow-200 transition-colors">世界唐氏综合症日</Link></li>
              <li><Link href="/sleep" className="hover:text-yellow-200 transition-colors">世界睡眠日</Link></li>
            </ul>
          </nav>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gradient-to-r from-blue-500 to-green-400 text-white p-4 text-center">
          <p>© {new Date().getFullYear()} 3月21日特别网站 | 春分 · 星座交界 · 国际纪念日</p>
        </footer>

        {/* Service Worker Registration */}
        <Script src="/sw-register.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
