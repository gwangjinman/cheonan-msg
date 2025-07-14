import { Noto_Sans_KR } from "next/font/google";
import { cookies } from "next/headers";
import Header from "../components/header/header";
import "./globals.css";
import QRDialog from "./qr-dialog";
import { Button } from "../components/ui/button";

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
                <meta name="naver-site-verification" content="25bfde5099d48c1758ca074c8fbae9493460ab71" />
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

                    <main className="grow w-full mx-auto max-w-6xl px-4">
                        {children}
                    </main>

                    <footer className="py-5 px-3 border-t border-gray-800
                    flex items-center min-[450px]:justify-center gap-5
                    text-white sticky bottom-0 w-full bg-gray-900 overflow-x-auto
                    text-nowrap">
                        <Button
                            asChild
                            className="p-6 bg-blue-800 rounded-lg
                            hover:bg-blue-700 transition-colors">
                            <a href="tel:01021832567">
                                <div>
                                    전화 예약
                                </div>
                            </a>
                        </Button>

                        <Button
                            asChild
                            className="p-6 bg-blue-800 rounded-lg
                            hover:bg-blue-700 transition-colors">
                            <a target="_blank" rel="noopener noreferrer"
                                href="https://t.me/opoo111">
                                <div>
                                    텔레그램 예약
                                </div>
                            </a>
                        </Button>

                        <Button
                            asChild
                            className="p-6 bg-blue-800 rounded-lg
                            hover:bg-blue-700 transition-colors">
                            <a target="_blank" rel="noopener noreferrer"
                                href="http://qr.kakao.com/talk/oc7O_jTuOfo8vtIEZSmiBL8vVuc-">
                                <div>
                                    카톡 아이디: opoo111
                                </div>
                            </a>
                        </Button>
                        {/* <QRDialog /> */}
                    </footer>
                </div>
            </body>
        </html>
    );
}