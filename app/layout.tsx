import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Nest Technologies — Engineering & Product Development",
  description:
    "Nest Technologies is focused on engineering, systems thinking, and product development. Building software, systems, and beyond.",
  openGraph: {
    title: "Nest Technologies — Engineering & Product Development",
    description: "Building software, systems, and beyond.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <footer>
          <div className="footer-top">
            <div className="footer-brand">
              <p className="nav-logo" style={{ fontSize: 15, fontWeight: 600 }}>
                Nest Technologies
              </p>
              <p>
                Engineering and product development. Building software,
                systems, and beyond.
              </p>
            </div>
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li>
                  <Link href="/#philosophy">Philosophy</Link>
                </li>
                <li>
                  <Link href="/#work">Work</Link>
                </li>
                <li>
                  <Link href="/#research">Research</Link>
                </li>
                <li>
                  <Link href="/#contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Nest Technologies. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
