import type { Metadata } from "next"
import { Noto_Serif, Manrope } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ScrollProgressBar } from "@/components/ui/effects/scroll-progress-bar"
import { SmoothScroll } from "@/components/ui/effects/smooth-scroll"

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-headline",
  weight: ["400", "700"],
  style: ["normal", "italic"],
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Osteria Notte | The Midnight Sommelier",
  description:
    "Candlelit Italian dining, curated like a midnight cellar.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${notoSerif.variable} ${manrope.variable} bg-background text-foreground font-body antialiased`}>
        <ScrollProgressBar />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
