"use client";

import { massageReviewRequestResults } from "@/index";

type ResultCardProps = {
    review: typeof massageReviewRequestResults.$inferSelect;
};

export default function ResultCard({
    review,
}: ResultCardProps) {
    return (
        <div className={`border ${review.result === "APPROVED"
            ? "border-green-600"
            : "border-red-600"
            }  rounded-lg p-4 bg-green-900/20`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-white">
                            {review.author}
                        </span>
                        <div className="flex text-yellow-400">
                            {"★".repeat(5)}
                        </div>
                    </div>
                    <p className="text-gray-300 mb-2">
                        {review.comment}
                    </p>
                    <span className="text-sm text-gray-500">
                        {review.requestedAt.toLocaleDateString("ko-KR")}
                    </span>
                </div>
                <div className="flex items-center">
                    <span className={`px-3 py-1 ${review.result === "APPROVED"
                        ? "bg-green-600"
                        : "bg-red-600"} text-white rounded-full text-sm`}>
                        {review.result === "APPROVED" ? "승인" : "거절"}
                    </span>
                </div>
            </div>
        </div>
    );
}