// @/app/layout.tsx

import type { Metadata } from "next";
import "@/app/styles/globals.css";
import MainNavigation from "@/app/components/(main elements)/MainNavigation";
import MainFooter from "@/app/components/(main elements)/MainFooter";
import ContentWrapper from "@/app/components/(main elements)/ContentWrapper";
import { ThemeProvider } from '@/app/components/ThemeProvider';
import ScrollToTopButton from '@/app/components/ScrollToTopButton';
import { Space_Grotesk, Jost } from 'next/font/google';

const space_grotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space-grotesk'
});

const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost'
});

export const metadata: Metadata = {
    title: "Analytic Talesmith",
    description: "Science with a Soul; Data with a Story",
    metadataBase: new URL("https://analytictalesmith.github.io"),
    openGraph: {
        siteName: "Analytic Talesmith",
        type: "website",
        locale: "en_US",
        title: "Analytic Talesmith",
        description:
            "Science with a Soul; Data with a Story",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "analyticTalesmith"
            }]
    },
    robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
        googleBot: "index, follow"
    },
    applicationName: "Analytic Talesmith",
    appleWebApp: {
        title: "Analytic Talesmith",
        statusBarStyle: "default",
        capable: true
    },
    icons: {
        icon: [
            {
                url: "/icon.ico",
                type: "image/x-icon"
            }
        ],
        shortcut: [
            {
                url: "/icon.ico",
                type: "image/x-icon"
            }
        ]
    },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${space_grotesk.variable} ${jost.variable}`} suppressHydrationWarning>
            <body className="bg-background">
                <div className="background-graphic"></div>
                <ThemeProvider>
                    <MainNavigation />
                    <ContentWrapper>
                        {children}
                    </ContentWrapper>
                    <ScrollToTopButton />
                    <MainFooter />
                </ThemeProvider>
            </body>
        </html>
  );
}