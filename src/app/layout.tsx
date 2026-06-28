import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sourav-portfolio.vercel.app"),
  title: "Sourav | Backend Software Engineer",
  description: "Portfolio of Sourav, a Backend/Full Stack Engineer specializing in Python, C++, and scalable systems.",
  openGraph: {
    title: "Sourav | Backend Software Engineer",
    description: "Portfolio of Sourav, a Backend/Full Stack Engineer specializing in Python, C++, and scalable systems.",
    type: "website",
    url: "https://sourav-portfolio.vercel.app", 
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourav | Backend Software Engineer",
    description: "Portfolio of Sourav, a Backend/Full Stack Engineer specializing in Python, C++, and scalable systems.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Sourav",
      "jobTitle": "Backend Software Engineer",
      "url": "https://sourav-portfolio.vercel.app",
      "sameAs": [
        "https://github.com/souravvoid",
        "https://www.linkedin.com/in/sourav-873471302/"
      ],
      "knowsAbout": [
        "Computer Science",
        "Software Engineering",
        "FastAPI",
        "Python",
        "C++",
        "Linux",
        "TCP/IP internals",
        "Cryptography"
      ]
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 md:p-8 gap-6 h-[100dvh] md:h-screen overflow-hidden">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
