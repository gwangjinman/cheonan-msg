import Head from "@/components/head";
import MapClient from "@/components/map-client";
import Image from "next/image";
import { Metadata } from "next/types";

export const metadata: Metadata = {
    title: "천안 동남구 No.1 출장마사지 | 100% 후불제 | 20대 관리사 상시 대기 | 천안 홈케어",
    description: "천안 출장마사지, 아산 출장마사지, 천안 아로마 마사지, 천안 타이 마사지, 아산 아로마 마사지, 아산 타이 마사지, 천안 24시 마사지, 아산 24시 마사지, 천안 홈타이, 아산 홈타이, 천안 스웨디시, 아산 스웨디시, 천안 마사지 가격, 아산 마사지 가격, 천안 출장 홈케어, 아산 출장 홈케어, 천안 남성전용 마사지, 아산 남성전용 마사지, 20대 관리사",
};

export default function DongnamguPage() {
    return (
        <div>
            <article className="space-y-32 text-center py-20">
                <section className="space-y-5">
                    <h1 className="text-4xl font-bold mb-4 text-white">
                        <span>천안 동남구 출장마사지 | 천안 동남구 20대 출장샵</span><br />
                        <span>천안 20대 관리사 | 100% 후불제</span>
                    </h1>

                    <a href=""
                        className="flex items-center justify-center">
                        <div className="h-56 w-56 bg-pink-400">

                        </div>
                    </a>
                    <div className="text-white text-center">
                        천안 동남구 20대 한국 관리사의 프라이빗한 1대1 케어로<br />
                        지친 몸과 마음을 힐링하세요.<br />
                        예약 후 단 30분 이내에 원하는 장소로 방문합니다.<br />
                        홈케어 독보적 1위 업체
                    </div>
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

                <section className="bg-gray-900 rounded-xl py-12 px-6 max-w-2xl mx-auto shadow-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">이용 후기</h2>
                    <div className="space-y-6">
                        <div className="bg-gray-800 rounded-lg p-5 text-left">
                            <p className="text-white mb-2">"출장마사지 처음 받아봤는데, 관리사분이 정말 친절하고 실력도 좋으셨어요. 집에서 편하게 힐링했습니다!"</p>
                            <span className="text-pink-400 text-sm">- 김○○ (신부동)</span>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-5 text-left">
                            <p className="text-white mb-2">"예약도 간편하고, 원하는 시간에 딱 맞춰 방문해주셔서 너무 만족합니다. 다음에도 또 이용할게요."</p>
                            <span className="text-pink-400 text-sm">- 이○○ (청당동)</span>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-5 text-left">
                            <p className="text-white mb-2">"출장이라 호텔에서 받았는데, 위생도 철저하고 서비스가 최고였습니다. 강력 추천합니다!"</p>
                            <span className="text-pink-400 text-sm">- 박○○ (봉명동)</span>
                        </div>
                    </div>
                </section>

                <section>
                    <MapClient
                        mapTitle="천안 동남구 출장마사지"
                        lat={36.7642822265625}
                        lng={127.22086334228516} />
                </section>

                <section className="bg-gray-800 rounded-xl py-12 px-6 max-w-3xl mx-auto mt-12 shadow-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        천안 동남구 24시간 출장마사지
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "천안 동남구 출장마사지",
                            "천안 동남구 홈타이",
                            "천안 동남구 홈케어",
                            "천안 동남구 후불제 마사지",
                            "천안 동남구 출장안마",
                            "천안 대흥동 출장마사지",
                            "천안 성황동 출장마사지",
                            "천안 문화동 출장마사지",
                            "천안 원성동 출장마사지",
                            "천안 구성동 출장마사지",
                            "천안 청수동 출장마사지",
                            "천안 청당동 출장마사지",
                            "천안 신방동 출장마사지",
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
        title: "🏠 집, 모텔, 호텔, 오피스텔 어디든 OK – 천안 동남구 전역 빠른 출장",
        content: "동남구 출장마사지는 편안함과 전문성을 모두 담은 방문형 서비스입니다.<br />천안 중심지인 동남구 전지역을 아우르며, 고객이 원하는 장소로 정확하게 도착합니다.<br /><br />신부동, 청당동, 봉명동, 문화동, 원성동 등 전지역 출장<br /><br />모든 20대 관리사 위생관리 철저 / 정기 교육 이수",
    },

    "section2": {
        title: "🌿 피로는 가볍게, 만족은 오래가게",
        content: "당신의 하루를 가볍게 만들어줄<br />전문 테라피스트의 손길, 단순한 마사지가 아닌 회복 그 자체입니다.<br /><br />근육 뭉침 해소 중심의 딥티슈 관리<br />감정 안정과 숙면 유도에 특화된 아로마 릴랙스 케어<br />만성피로에 효과적인 순환 중심 수기 테라피",
    },

    "section3": {
        title: "📲 간편한 예약 시스템 + 고객 우선 운영",
        content: "24시간 언제든 예약 가능 (카톡·전화·문자 문의 OK)<br />원하는 시간에, 원하는 장소로 정확하게 방문<br />예약 전 간단한 컨디션 상담 제공<br />365일 연중무휴 / 야간·주말도 운영",
    },

    "section4": {
        title: "이런 분께 강력 추천드립니다.",
        content: "직장과 노동으로 피로가 누적된 분<br /><br />집 근처에서 믿을 수 있는 관리를 찾는 분<br /><br />외출 없이 고급 마사지 받고 싶은 1인 가구<br /><br />기존 다른 업체에 만족하지 못했던 분",
    },

    "section5": {
        title: "내 공간, 내 시간에 맞춘 진짜 힐링",
        content: "동남구 출장마사지는 편의성만을 내세우지 않습니다.<br />몸과 마음이 함께 회복될 수 있는 진짜 프라이빗 테라피를 지향합니다.<br />바쁜 일상 속에서<br />단 1시간이라도 오롯이 나에게 집중할 수 있는 시간.<br />이제는 집에서도, 모텔/호텔에서도,<br />내가 원하는 곳에서 고급 마사지를 받으세요.<br />📞 지금 예약하고, 동남구에서 경험하는 프리미엄 힐링을 만나보세요.",
    },
};