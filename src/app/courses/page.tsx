import MapClient from "@/components/map-client";
import CourseCard from "./course-card";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "천안/아산 전지역 출장마사지 코스 가격표 안내",
    description: "천안 출장마사지, 아산 출장마사지, 천안 아로마 마사지, 천안 타이 마사지, 아산 아로마 마사지, 아산 타이 마사지, 천안 24시 마사지, 아산 24시 마사지, 천안 홈타이, 아산 홈타이, 천안 스웨디시, 아산 스웨디시, 천안 마사지 가격, 아산 마사지 가격, 천안 출장 홈케어, 아산 출장 홈케어, 천안 남성전용 마사지, 아산 남성전용 마사지",
};

export default function CoursesPage() {
    return (
        <div className="py-20 flex flex-col items-center space-y-16">
            <div className="space-y-4 text-center text-white">
                <h1 className="text-4xl font-bold">
                    프리미엄 천안 출장마사지 코스
                </h1>
                <div className="text-xl space-y-5">
                <p>
                    다양한 천안 마사지 코스를 소개합니다.<br />
                    각 코스는 전문 20대 관리사님이 제공하며,<br />
                    100% 후불제로 안전하게 이용할 수 있습니다.
                </p>
                <p>
                    365일 24시간 언제든 예약주세요.<br />
                    예약 접수 후 관리사님이 즉시 출발합니다.
                </p>
                <p>
                    <strong>천안 전지역 출장마사지</strong>를 통해 집에서도 편안하게 힐링을 경험해 보세요.
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

            <div className="w-full max-w-4xl">
                <MapClient
                    mapTitle="천안 출장마사지"
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