import { ThemeProvider } from "@/components/contexts/theme-provider";
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";
import type React from "react";
import type { Metadata, Viewport } from "next"

const APP_NAME = "Bash Guide";
const APP_DEFAULT_TITLE = "Learn Bash With Me";
const APP_TITLE_TEMPLATE = "%s - Bash Guide";
const APP_DESCRIPTION = "Learn Bash with me is a free and open-source Ultimate Bash Shell Guide to master command line and shell scripting.";

export const metadata: Metadata = {
 applicationName: APP_NAME,
 metadataBase: new URL("https://bash.getcyber.me"),
 title: {
   default: APP_DEFAULT_TITLE,
   template: APP_TITLE_TEMPLATE,
 },
 description: APP_DESCRIPTION,
 manifest: "/manifest.json",
 appleWebApp: {
   capable: true,
   statusBarStyle: "default",
   title: APP_DEFAULT_TITLE,
 },
 formatDetection: {
   telephone: false,
 },
 openGraph: {
   type: "website",
   siteName: APP_NAME,
   title: {
     default: APP_DEFAULT_TITLE,
     template: APP_TITLE_TEMPLATE,
   },
   description: APP_DESCRIPTION,
   images: [
     {
       url: '/og.png',
       width: 1344,
       height: 766,
     },
   ],
 },
 twitter: {
   card: "summary",
   title: {
     default: APP_DEFAULT_TITLE,
     template: APP_TITLE_TEMPLATE,
   },
   description: APP_DESCRIPTION,
 },
};

export const viewport: Viewport = {
 themeColor: "#FFFFFF",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
   <html lang="en" suppressHydrationWarning>
     <body
       className={`${GeistSans.variable} ${GeistMono.variable} font-regular antialiased`}
       suppressHydrationWarning
     >
       <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
       >
         <Navbar />
         <main className="sm:container mx-auto w-[90vw] h-auto">
           {children}
         </main>
         <Footer />
       </ThemeProvider>
       <Toaster />
       <Analytics />
       <SpeedInsights/>
     </body>
   </html>
 );
}