import { verifyJWT } from "@/lib/jwt";
import {
    getReviewRequestResults,
    getReviewRequests,
} from "../actions";
import Common from "./common";
import { Metadata } from "next/types";

export const metadata: Metadata = {
    title: "런투유 출장마사지 리뷰 관리",
    description: "런투유 출장마사지 고객들의 리얼한 후기와 요청을 확인해 보세요.",
};

export default async function ReviewsManagePage() {
    const payload = await verifyJWT();
    if (!payload) {
        return (
            <div className="mt-20 text-white flex items-center justify-center">
                <h1 className="text-2xl font-bold">
                    로그인 후 이용해 주세요.
                </h1>
            </div>
        );
    }
    const reviewRequests = await getReviewRequests();
    const reviewRequestResults = await getReviewRequestResults();

    return (
        <div>
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold mb-8 text-white">리뷰 관리</h1>
                <Common
                    key={reviewRequests.length}
                    reqs={reviewRequests}
                    reqResults={reviewRequestResults} />
            </div>
        </div>
    );
}