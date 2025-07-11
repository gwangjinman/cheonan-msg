import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import Header from "../components/header/header";
import { cookies } from "next/headers";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    return (
        <html lang="ko">
            <head>
                <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
                <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
                <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" />
                <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
            </head>

            <body className={`${noto.className} antialiased bg-[#010203]`}>
                <div className="min-h-screen flex flex-col">
                    <header className="bg-neutral-100 sticky top-0 z-50">
                        <Header
                        loggedIn={Boolean(token)} />
                    </header>

                    <main className="grow w-full mx-auto max-w-6xl px-4 push">
                        {children}
                    </main>

                    <footer className="py-5 border-t border-gray-800
                    flex items-center justify-center gap-5 text-white
                    sticky bottom-0 w-full bg-gray-900">
                        <a href="">
                            <div className="p-3 bg-blue-800 rounded-lg
                            hover:bg-blue-700 transition-colors">
                                카카오톡 예약
                            </div>
                        </a>
                        <a href="">
                            <div className="p-3 bg-blue-800 rounded-lg
                            hover:bg-blue-700 transition-colors">
                                텔레그램 예약
                            </div>
                        </a>
                        <a href="">
                            <div className="p-3 bg-blue-800 rounded-lg
                            hover:bg-blue-700 transition-colors">
                                전화 예약
                            </div>
                        </a>
                    </footer>
                </div>
            </body>
        </html>
    );
}