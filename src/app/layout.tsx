import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import Header from "../components/header/header";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">

            <body className={`${noto.className} antialiased bg-[#010203]`}>
                <div className="min-h-screen flex flex-col">
                    <header className="bg-neutral-100 sticky top-0 z-50">
                        <Header />
                    </header>

                    <main className="grow w-full mx-auto max-w-6xl px-4">
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