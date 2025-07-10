import { Suspense } from "react";
import ReviewForm from "./review-form";
import ReviewList from "./review-list";
import { getReviews } from "./actions";
import { cookies } from "next/headers";

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