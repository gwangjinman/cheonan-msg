import Head from "@/components/head";
import MapClient from "@/components/map-client";
import Image from "next/image";
import { Metadata } from "next/types";

export const metadata: Metadata = {
    title: "런투유출장마사지 | 아산출장마사지 | 100% 후불제 | 20대 관리사 상시 대기 | 아산홈케어",
    description: "런투유 출장마사지는 아산 전지역(온천, 신창, 용화, 배방, 탕정 등)에서 24시간 운영되는 프리미엄 홈타이·출장마사지 서비스입니다. 아산출장마사지, 아산홈타이, 아산출장안마, 아산아로마홈케어, 아산힐링케어 등의 서비스를 제공하는 아산 대표 출장마사지 브랜드이며, 20대 전문 관리사들이 고객 맞춤형 케어를 제공합니다.",
};

export default function AsanPage() {
    return (
        <div>
            <article className="space-y-32 text-center py-20">
                <section className="space-y-5">
                    <h1 className="text-4xl font-bold mb-4 text-white">
                        <span>런투유출장마사지 | 아산출장마사지 ㅣ 아산24시간출장안마</span><br />
                        <span>아산 국내 20대 관리사 | 100% 후불제</span>
                    </h1>

                    <a href="tel:+821021832567"
                        className="flex items-center justify-center">
                        <Image
                            src="/image2.png"
                            width={400}
                            height={400}
                            alt="런투유출장마사지 소개 이미지" />
                    </a>

                    <div className="text-white text-center">
                        바쁜 하루, 쌓이는 피로..<br />
                        굳이 이동하지 않아도, 아산 어디서든 편하게 받는 고품격 마사지.<br />
                        런투유출장마사지는 24시간 연중무휴로,<br />
                        아산 전 지역 어디든지 출장 방문 가능하며,<br />
                        전문성 있는 20대 관리사들이 맞춤형 케어를 제공합니다.
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

                <section className="bg-gray-900 rounded-xl py-12 px-6 max-w-3xl mx-auto shadow-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">런투유출장마사지 리얼 후기</h2>
                    <div className="space-y-6">
                        <div className="bg-gray-800 rounded-lg p-5 text-white shadow">
                            <div className="flex items-center mb-2">
                                <span className="font-semibold mr-2">김**</span>
                                <span className="text-sm text-gray-400">2025.07</span>
                            </div>
                            <p>
                                출장 중 호텔에서 받았는데, 정말 피로가 싹 풀렸어요.<br />
                                상담부터 관리까지 꼼꼼하게 신경 써주셔서 만족했습니다!
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-5 text-white shadow">
                            <div className="flex items-center mb-2">
                                <span className="font-semibold mr-2">박**</span>
                                <span className="text-sm text-gray-400">2025.07</span>
                            </div>
                            <p>
                                집에서 편하게 받을 수 있어서 너무 좋아요.<br />
                                테라피스트 분이 친절하고 위생도 철저해서 안심됐습니다.
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-5 text-white shadow">
                            <div className="flex items-center mb-2">
                                <span className="font-semibold mr-2">이**</span>
                                <span className="text-sm text-gray-400">2025.07</span>
                            </div>
                            <p>
                                예약도 간편하고, 맞춤형 케어라서 만족도가 높아요.<br />
                                다음에도 꼭 이용할 생각입니다!
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-10">
                    <MapClient
                        mapTitle="런투유아산출장마사지"
                        lat={36.78234100341797}
                        lng={127.00052642822266} />

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
                        아산24시간전지역출장마사지
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "아산출장안마",
                            "아산출장샵",
                            "아산출장마사지",
                            "아산홈타이",
                            "아산홈케어",
                            "아산후불제마사지",
                            "아산24시출장마사지",
                            "아산20대관리사출장",
                            "아산콜걸",
                            "아산모텔출장마사지",
                            "아산온천동출장마사지",
                            "아산탕정출장마사지",
                            "아산전지역출장마사지",
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
        title: "💆‍♀️ 아산만의 프리미엄 출장 홈케어",
        content: "아산 출장마사지는 단순한 편리함을 넘어서<br />전문성과 감성 케어를 결합한 프리미엄 서비스입니다.<br /><br />아산 중심지부터 외곽 주택단지까지 빠른 방문<br /><br />고객 상태에 맞춘 오일, 압력, 테크닉 세팅<br /><br />모든 테라피스트, 정기 위생교육 및 매너 검증 완료<br /><br />맞춤식 힐링 프로그램으로, 단 한 번의 관리도 특별하게",
    },

    "section2": {
        title: "🧘 아산에서 만나는 차별화된 테라피 시스템",
        content: "천편일률적인 마사지 코스는 NO<br /><br />당일 컨디션, 근육 긴장도, 감정 상태까지 고려한 오감맞춤 관리<br /><br />아산 시내 전 지역 당일 예약 가능 (배방, 둔포, 탕정, 음봉 등 포함)<br /><br />호텔, 모텔, 오피스텔, 자택 모두 출장 가능",
    },

    "section3": {
        title: "🛎 예약은 간편하게, 서비스는 정성스럽게",
        content: "클릭 한 번으로 빠른 예약 접수<br />이용 전 전문 상담으로 맞춤형 케어 안내<br />100% 사전 상담제 운영으로 불편함 최소화<br />365일 연중무휴 운영 (주말·야간 이용 가능)",
    },

    "section4": {
        title: "💡이런 분께 추천드립니다.",
        content: "하루 종일 서 있거나 앉아 있어 허리·다리가 무거운 분<br /><br />외출 없이 집에서 쉴 수 있는 관리가 필요한 분<br /><br />반복되는 일상에 쉼표가 필요한 분<br /><br />특별한 힐링 시간을 보내고 싶은 분<br /><br />출장 중 호텔에서 잠깐이라도 회복이 필요한 직장인",
    },

    "section5": {
        title: "오늘, 당신의 공간이 힐링이 되는 곳",
        content: "마사지가 단순한 ‘손길’이 아닌<br />몸과 마음을 동시에 회복하는 시간이 되어야 한다고 믿습니다.<br /><br />런투유출장마사지는 기술력과 정성을 더해<br />당신의 일상에 따뜻한 쉼을 더합니다.<br /><br />📞 지금 바로 예약하세요 – 몸이 기억하는 힐링, 아산에서 시작됩니다.",
    },
};