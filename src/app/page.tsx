import Head from "@/components/head";
import MapClient from "@/components/map-client";
import Image from "next/image";
import { Metadata } from "next/types";

export const metadata: Metadata = {
    title: "런투유 출장마사지 | 천안출장마사지 | 100% 후불제 | 20대 관리사 상시 대기 | 천안홈케어",
    description: "런투유 출장마사지는 천안 전지역(대흥, 두정, 봉명, 불당, 쌍용, 신부 등)에서 24시간 운영되는 프리미엄 홈타이·출장마사지 서비스입니다. 천안출장마사지, 천안홈타이, 천안출장안마, 천안아로마홈케어, 천안힐링케어 등의 서비스를 제공하는 천안 대표 출장마사지 브랜드이며, 20대 전문 관리사들이 고객 맞춤형 케어를 제공합니다.",
};

export default function Home() {
    return (
        <div>
            <article className="space-y-32 text-center py-20">
                <section className="space-y-5">
                    <h1 className="text-4xl font-bold mb-4 text-white">
                        런투유출장마사지 | 천안출장마사지 | 천안24시간출장안마<br />
                        천안출장안마 NO.1 브랜드 / 천안출장마사지 100% 후불제
                    </h1>

                    <a href="tel:01021832567"
                        className="flex items-center justify-center">
                            <Image
                            src="/image1.png"
                            width={400}
                            height={400}
                            alt="런투유출장마사지 소개 이미지" />
                    </a>
                    
                    <div className="text-white text-center">
                        하루의 피로가 무겁게 쌓인 날, 몸과 마음이 모두 지쳤을 때, 굳이 멀리 갈 필요 없습니다.<br />
                        천안 전지역 어디서든 런투유출장마사지가 당신의 공간으로 찾아갑니다.<br />
                    </div>

                    <a href="/courses"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 hover:bg-pink-600 transition-colors duration-200 text-white font-semibold text-lg shadow-lg border border-pink-500"
                        style={{ boxShadow: "0 4px 24px rgba(255, 0, 128, 0.15)" }}
                    >
                        <span>코스 가격표 안내</span>
                        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="ml-1">
                            <path d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </section>

                {Object.keys(descriptions).map((key) => (
                    <section key={key} className="space-y-5">
                        <h2 className="text-4xl font-bold text-white">
                            {descriptions[key].title}
                        </h2>
                        <div className="text-white text-center"
                            dangerouslySetInnerHTML={{
                                __html: descriptions[key].content,
                            }} />
                    </section>
                ))}

                <section>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="bg-white rounded-full flex flex-col items-center justify-center w-60 h-60 p-8">
                            <span className="text-3xl mb-4">💆‍♀️</span>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">찐후기</h3>
                            <p className="text-gray-600 text-center text-sm">두 번째 이용인데 역시나 만족스럽네요. 말하지 않아도 제 상태를 캐치해 주셔서 놀랐습니다.</p>
                        </div>
                        <div className="bg-white rounded-full flex flex-col items-center justify-center w-60 h-60 p-8">
                            <span className="text-3xl mb-4">🏠</span>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">찐후기</h3>
                            <p className="text-gray-600 text-center text-sm">사무직이라 허리통증이 심했는데, 출장 받고 나니 몸이 가벼워졌어요!</p>
                        </div>
                        <div className="bg-white rounded-full flex flex-col items-center justify-center w-60 h-60 p-8">
                            <span className="text-3xl mb-4">✨</span>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">찐후기</h3>
                            <p className="text-gray-600 text-center text-sm">이런 서비스가 있다는 걸 이제야 알았네요. 앞으로 자주 부를 예정입니다.</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-10">
                    <MapClient
                        mapTitle="런투유천안출장마사지"
                        lat={36.81377410888672}
                        lng={127.14159393310547} />

                        <a href="/courses"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 hover:bg-pink-600 transition-colors duration-200 text-white font-semibold text-lg shadow-lg border border-pink-500"
                        style={{ boxShadow: "0 4px 24px rgba(255, 0, 128, 0.15)" }}
                    >
                        <span>코스 가격표 안내</span>
                        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="ml-1">
                            <path d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </section>
                

                <section className="bg-gray-800 rounded-xl py-12 px-6 max-w-3xl mx-auto mt-12 shadow-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        천안전지역24시간출장마사지
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "천안홈타이",
                            "천안출장마사지",
                            "천안출장안마",
                            "천안아로마 홈타이",
                            "천안힐링케어",
                            "천안한국인홈케어",
                            "천안후불제마사지",
                            "천안성정동출장마사지",
                            "천안두정동출장마사지",
                            "천안쌍용동출장마사지",
                            "천안백석동출장마사지",
                            "천안불당동출장마사지",
                            "천안오룡동출장마사지",
                        ].map((keyword) => (
                            <span
                                key={keyword}
                                className="bg-pink-500 text-white rounded-full px-4 py-2 text-sm font-medium shadow"
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>
                </section>
            </article>
        </div>
    );
}

const descriptions: {
    [key: string]: {
        title: string;
        content: string;
    };
} = {
    "section1": {
        title: "천안에서 찾는 오감만족 힐링 서비스",
        content: "도심 속 복잡함을 떠나지 않아도 됩니다.<br />우리는 천안 지역 맞춤 출장 힐링케어를 통해 고객 한 분 한 분에게 정성을 담은 관리를 제공합니다.<br />전문 테라피스트가 고객의 컨디션에 맞춘 맞춤형 테크닉으로, 단순한 마사지 이상의 만족을 선사합니다."
    },

    "section2": {
        title: "🌿천안 홈타이의 새로운 기준",
        content: "자극적인 스파 말고, 진짜 '쉼'이 필요한 날<br />프랜차이즈형 마사지와는 다른, 1:1 맞춤형 힐링 프로그램<br />위생, 매너, 기술 삼박자를 고루 갖춘 검증된 여성 테라피스트<br />마사지가 단순한 근육 이완을 넘어, 마음까지 어루만지는 시간이어야 한다고 믿기에<br />천안 출장 홈케어 전문 브랜드로서의 자부심을 갖고 서비스를 제공합니다."
    },

    "section3": {
        title: "🕒예약부터 관리까지, 모두 간편하게",
        content: "24시간 자동 예약 시스템 운영<br />천안 어디든 빠른 방문 가능 (성환, 두정, 불당, 쌍용, 직산 포함 전지역)<br />100% 사전 상담제 운영으로 불편함 최소화<br />비대면 결제, 예약 내역 문자 안내 서비스 제공<br />",
    },

    "section4": {
        title: "💡이런 분께 추천드립니다.",
        content: "직장 스트레스로 목·어깨가 뻐근한 분<br /><br />집에서 편하게 전문 테라피를 받고 싶은 분<br /><br />매번 같은 코스에 질린 분<br /><br />조용하고 깔끔한 관리를 선호하시는 분<br /><br />출장 마사지가 처음이라 걱정되는 분<br /><br />마사지 후에도 집에서 편안하게 쉬고 싶은 분<br /><br />출장 마사지의 진정한 가치를 경험하고 싶은 분",
    },

    "section5": {
        title: "당신만의 힐링, 오늘 런투유출장마사지에서 시작하세요.",
        content: "프리미엄 출장 테라피를 이제 부담 없이 집, 숙소, 사무실 어디에서든 받아보세요.<br />경험해보면 압니다.<br />내 공간에서 받는 진짜 힐링이 얼마나 특별한지.<br /><br />지금 예약하세요.<br />천안출장마사지의 새로운 기준이 되어드리겠습니다."
    },
};