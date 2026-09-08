import { Geist, Geist_Mono, IBM_Plex_Sans, Roboto } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { cn } from "@/lib/utils";
import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

const robotoHeading = Roboto({subsets:['latin'],variable:'--font-heading'});

const ibmPlexSans = IBM_Plex_Sans({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"



  return (
    <html
      lang="en" 
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", ibmPlexSans.variable, robotoHeading.variable)}
    >
      <body 
        className={`${fontMono.variable} ${ibmPlexSans.variable} ${robotoHeading.variable} antialiased flex min-h-screen w-full`}
      > 
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider defaultOpen={defaultOpen}>
              <AppSidebar />
              <main className="min-w-0 flex-1">
                <Navbar/>
                <div className="px-4">{children}</div>
              </main>
            </SidebarProvider>
          </ThemeProvider>
      </body>
    </html>
  )
}
