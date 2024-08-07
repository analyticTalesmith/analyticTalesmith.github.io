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
  description: "Generated by create next app",
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
                        <div className="w-max">{children}</div>
                    </ContentWrapper>
                    <ScrollToTopButton />
                    <MainFooter />
                </ThemeProvider>
            </body>
        </html>
  );
}