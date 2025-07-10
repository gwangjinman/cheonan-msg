"use client";

import { useRouter } from "next/navigation";
import { saveReviewRequestResult } from "../actions";
import { Review } from "../type";
import { useState } from "react";

type PendingCardProps = {
    review: Review;
};

export default function PendingCard({
    review,
}: PendingCardProps) {
    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(false);

    const handleApprove = async (result: "APPROVED" | "REJECTED") => {
        try {
            setIsProcessing(true);
            await saveReviewRequestResult(review, result);
        } finally {
            setIsProcessing(false);
            router.refresh();
        }
    };

    return (
        <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition-colors">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-white">
                            {review.author}
                        </span>
                    </div>
                    <p className="text-gray-300 mb-2">
                        {review.comment}
                    </p>
                    <span className="text-sm text-gray-500">
                        {review.createdAt.toLocaleDateString("ko-KR")}
                    </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                    <button disabled={isProcessing}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        onClick={() => handleApprove("APPROVED")}>
                        {isProcessing ? "처리 중..." : "승인"}
                    </button>
                    <button disabled={isProcessing}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        onClick={() => handleApprove("REJECTED")}>
                        {isProcessing ? "처리 중..." : "거절"}
                    </button>
                </div>
            </div>
        </div>
    );
}