import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SITENAME } from "@/lib/constants";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${SITENAME} - Video Bokep Indo Jepang Barat Viral Terbaru`,
    description: `${SITENAME} Video Bokep Indo Bocil Ngentot Jilbab Smp Mama Viral Sma Tante Live Paksa Bokep Abg Jepang Jav Barat Korea China Terbaru`,
    metadataBase: new URL("https://digilirteman.pages.dev"),
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: `${SITENAME} - Video Bokep Indo Jepang Barat Viral Terbaru`,
        description: `${SITENAME} Video Bokep Indo Bocil Ngentot Jilbab Smp Mama Viral Sma Tante Live Paksa Bokep Abg Jepang Jav Barat Korea China Terbaru`,
        url: `/`,
        type: `website`,
    },
    verification: {
        google: 'mGfEVz_cMMg5LOoFTimWXa1jWy67D15OPW7eEGzQN2w',
        yandex: '59d5ddab6cc3d99c',
    },
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `${SITENAME}`,
        "description": `${SITENAME} Video Bokep Indo Bocil Ngentot Jilbab Smp Mama Viral Sma Tante Live Paksa Bokep Abg Jepang Jav Barat Korea China Terbaru`,
        "logo": "https://digilirteman.pages.dev/favicon.ico",
        "url": "https://digilirteman.pages.dev",
        "founder":{
            "@type":"Person",
            "name":"admin",
            "url":"https://digilirteman.pages.dev"
            },
            "foundingDate":"2024-10-10"
        }
        const jsonLd2 = {
            "@context": "https://schema.org",
        "@type": "WebSite",
        "name": `${SITENAME}`,
        "url": "https://digilirteman.pages.dev",
        "description": `${SITENAME} Video Bokep Indo Bocil Ngentot Jilbab Smp Mama Viral Sma Tante Live Paksa Bokep Abg Jepang Jav Barat Korea China Terbaru`,
        "potentialAction": { 
        "@type": "SearchAction", 
          "target": "https://digilirteman.pages.dev/?q={search_term}", 
            "query-input": "required name=search_term"}
        }
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
