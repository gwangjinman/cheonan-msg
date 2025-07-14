import MapClient from "@/components/map-client";
import CourseCard from "./course-card";
import { type Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "런투유 출장마사지 코스 가격표 안내",
    description: "천안/아산 전지역 런투유 출장마사지 코스 안내 및 가격표 페이지입니다. 합리적인 가격으로 다양한 마사지 코스를 제공합니다. 20대 전문 관리사들이 제공하는 프리미엄 홈케어 서비스로, 100% 후불제로 안전하게 이용할 수 있습니다. 24시간 언제든지 예약 가능하니 편안하게 힐링을 경험해 보세요.",
};

export default function CoursesPage() {
    return (
        <div className="py-20 flex flex-col items-center space-y-16">
            <div className="space-y-4 text-center text-white">
                <h1 className="text-4xl font-bold">
                    프리미엄 런투유 출장마사지 코스
                </h1>

                <div className="text-xl space-y-5">
                    <p>
                        다양한 천안마사지 코스를 소개합니다.<br />
                        각 코스는 전문 20대 관리사님이 제공하며,<br />
                        100% 후불제로 안전하게 이용할 수 있습니다.
                    </p>
                    <p>
                        365일 24시간 언제든 예약주세요.<br />
                        예약이 접수되면 관리사님이 즉시 계신 곳으로 출발합니다.
                    </p>

                    <address className="flex flex-col items-center gap-2">
                        <strong>
                            <a href="tel:01021832567" className="text-pink-500">예약 문의: 010-2183-2567</a>
                        </strong>
                        <strong>
                            <a href="https://t.me/opoo111"
                                target="_blank"
                                className="text-pink-500">텔레그램으로 예약하기</a>
                        </strong>
                    </address>

                    <p>
                        <strong>천안/아산 전지역 출장마사지</strong>를 통해 집에서도 편안하게 힐링을 경험해 보세요.
                    </p>
                </div>
            </div>

            <div className="w-full grid sm:w-auto sm:grid-cols-2 xl:grid-cols-4 gap-3">
                {Object.keys(courses).map((key, index) => (
                    <CourseCard
                        key={index}
                        title={key}
                        course={courses[key]} />
                ))}
            </div>

            <a href="tel:01021832567"
                className="flex items-center justify-center">
                <Image
                    src="/image2.png"
                    width={400}
                    height={400}
                    alt="런투유출장마사지 소개 이미지" />
            </a>

            <div className="w-full max-w-4xl">
                <MapClient
                    mapTitle="천안/아산출장마사지 천안/아산출장안마"
                    lat={36.81377410888672}
                    lng={127.14159393310547} />
            </div>
        </div>
    );
}

const courses: {
    [title: string]: {
        [courseName: string]: string;
    };
} = {
    "타이": {
        "타이 60분": "7만원",
        "타이 90분": "9만원",
        "타이 120분": "11만원",
        "타이 150분": "14만원",
    },

    "아로마": {
        "아로마 60분": "8만원",
        "아로마 90분": "10만원",
        "아로마 120분": "12만원",
        "아로마 150분": "15만원",
    },

    "VIP": {
        "VIP 60분": "9만원",
        "VIP 90분": "11만원",
        "VIP 120분": "13만원",
        "VIP 150분": "16만원",
    },

    "VVIP": {
        "VVIP 60분": "11만원",
        "VVIP 90분": "13만원",
        "VVIP 120분": "15만원",
        "VVIP 150분": "19만원",
    },
};