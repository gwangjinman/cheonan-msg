import Head from "@/components/head";
import MapClient from "@/components/map-client";
import Image from "next/image";

export default function SeobukguPage() {
    return (
        <div>
            <article className="space-y-32 text-center py-20">
                <section className="space-y-5">
                    <h1 className="text-4xl font-bold mb-4 text-white">
                        <span>천안 서북구 출장마사지 | 천안 서북구 연중무휴 출장 안마</span><br />
                        <span>천안 성정동 20대 관리사 | 100% 후불제</span>
                    </h1>

                    <a href=""
                        className="flex items-center justify-center">
                        <div className="h-56 w-56 bg-pink-400">

                        </div>
                    </a>
                    <div className="text-white text-center">
                        천안 서북구 전지역 어디든 전화 한 통으로<br />
                        30분내에 20대 전담 관리사님이 방문합니다.<br />
                        홈케어 독보적 1위 업체로<br />
                        성정동, 불당동, 백석동, 두정동 등<br />
                        서북구 전지역 출장 가능합니다.<br />
                        <span className="text-pink-400 font-bold">
                            24시간 언제든지 예약 가능</span>
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
                    <h2 className="text-3xl font-bold text-white mb-6">실제 이용 후기</h2>
                    <div className="space-y-6">
                        <div className="bg-gray-800 rounded-lg p-5 text-left">
                            <p className="text-white mb-2">
                                "두정동 모텔에서 출장받았는데, 관리사님 미모도 굿이고 실력도 최고였어요. 다음에도 꼭 다시 예약할게요!"
                            </p>
                            <span className="text-blue-400 font-semibold text-sm">- 성정동 김○○님</span>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-5 text-left">
                            <p className="text-white mb-2">
                                "허리통증이 심했는데 테라피스트가 숙련되어 있어서 다음날 훨씬 편했어요."
                            </p>
                            <span className="text-blue-400 font-semibold text-sm">- 불당동 이○○님</span>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-5 text-left">
                            <p className="text-white mb-2">
                                "천안 여러 곳 이용했지만, 여긴 압도적으로 꼼꼼하고 친절합니다."
                            </p>
                            <span className="text-blue-400 font-semibold text-sm">- 두정동 박○○님</span>
                        </div>
                    </div>
                </section>

                <section>
                    <MapClient
                        mapTitle="천안 서북구 출장마사지"
                        lat={36.892822265625}
                        lng={127.16180419921875} />
                </section>

                <section className="bg-gray-800 rounded-xl py-12 px-6 max-w-3xl mx-auto mt-12 shadow-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        천안 서북구 24시간 출장 안마
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "천안 성정동 출장마사지",
                            "천안 불당동 출장마사지",
                            "천안 백석동 출장마사지",
                            "천안 두정동 출장마사지",
                            "천안 쌍용동 마사지",
                            "천안 서북구 출장안마",
                            "천안 20대 관리사",
                            "천안 한국인 홈타이",
                            "천안 한국인 홈케어",
                            "천안 후불제 마사지",
                            "천안 마사지 잘 하는 곳",
                            "천안 차암동 출장마사지",
                            "천안 성성동 출장마사지",
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
        title: "🏠 서북구 전지역, 집 앞까지 찾아가는 전문 테라피",
        content: "천안 서북구 전역에 걸쳐,<br /바쁜 일상 속에서도 편안함을 포기하지 않아도 되는 관리 서비스를 제공합니다.<br /><br />불당동, 두정동, 쌍용동, 성정동 등 전지역 빠른 방문<br />1:1 맞춤형 프로그램, 신체 컨디션별 맞춤 압 조절<br /><br />외부 소음 없는 집·숙소 중심의 조용한 케어 환경",
    },

    "section2": {
        title: "🌿 고정된 코스는 NO, 당신만의 맞춤 힐링 YES",
        content: "서북구 출장마사지 서비스는<br />정해진 루틴이 아닌, 매 순간 고객 상태를 반영한 진짜 맞춤형 관리를 지향합니다.<br />하루 종일 서 있는 고객을 위한 하체 집중 테라피<br />앉아서 근무하는 직장인을 위한 어깨·목 이완 관리<br />수면장애, 스트레스 완화를 위한 아로마 릴랙스 케어",
    },

    "section3": {
        title: "📲 간편한 예약, 세심한 서비스",
        content: "24시간 예약 문의 가능 (카톡·문자·전화)<br /><br />원하는 시간, 원하는 장소 지정 가능<br /><br />호텔·모텔·자택 모두 출장 가능<br /><br />시술 전 상담 + 체형 체크로 만족도 향상",
    },

    "section4": {
        title: "이런 분들에게 추천합니다.",
        content: "서북구 내에서 차분한 분위기의 마사지를 원하는 분<br /><br />멀리 가지 않고 집에서 바로 받는 전문 관리를 찾는 분<br /><br />짧은 휴식 시간에도 집중 테라피로 회복이 필요한 직장인<br /><br />불면, 두통, 만성피로에 시달리는 분<br /><br />프랜차이즈보다 개인 맞춤형 관리를 선호하는 분",
    },

    "section5": {
        title: "오늘 하루의 피로, 서북구 출장마사지가 덜어드립니다.",
        content: "천안 서북구 출장마사지는<br />단순한 서비스가 아닌, 하루를 회복시키는 고요한 휴식의 시간입니다.<br /><br />내 집에서, 내 방에서,<br />누구의 방해도 받지 않고 오롯이 나에게 집중하는 시간.<br />지금, 그 시간을 시작하세요.<br /><br />📞 지금 바로 예약하고, 내 공간에서 고품격 힐링을 누리세요.",
    },
};