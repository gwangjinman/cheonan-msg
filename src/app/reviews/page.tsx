import { Suspense } from "react";
import ReviewForm from "./review-form";
import ReviewList from "./review-list";
import { getReviews } from "./actions";
import { cookies } from "next/headers";
import { Metadata } from "next/types";

export const metadata: Metadata = {
    title: "천안/아산 No.1 출장마사지 후기 모음 | 천안 홈케어 | 아산 홈케어 | 100% 후불제",
    description: "천안 출장마사지, 아산 출장마사지, 천안 아로마 마사지, 천안 타이 마사지, 아산 아로마 마사지, 아산 타이 마사지, 천안 24시 마사지, 아산 24시 마사지, 천안 홈타이, 아산 홈타이, 천안 스웨디시, 아산 스웨디시, 천안 마사지 가격, 아산 마사지 가격, 천안 출장 홈케어, 아산 출장 홈케어, 천안 남성전용 마사지, 아산 남성전용 마사지, 20대 관리사",
};

type ReviewPageProps = {
    searchParams: Promise<{
        page?: string;
    }>;
};

export default async function ReviewsPage({
    searchParams,
}: ReviewPageProps) {
    let { page } = await searchParams;
    if (!page || isNaN(Number(page)) || Number(page) < 1) {
        page = "1";
    }

    const currentPage = Number(page);
    const reviews = await getReviews();

    const REVIEWS_PER_PAGE = 5;
    const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
    const paginatedReviews = reviews.slice(
        (currentPage - 1) * REVIEWS_PER_PAGE,
        currentPage * REVIEWS_PER_PAGE
    );

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    return (
        <div className="max-w-xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6 text-white">
                이용 후기
            </h1>
            <ReviewForm />
            <ReviewList
                reviews={paginatedReviews}
                currentPage={currentPage}
                totalPages={totalPages}
                loggedIn={Boolean(token)} />
        </div>
    );
}