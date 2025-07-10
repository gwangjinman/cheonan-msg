"use client";

import type {
    massageReviewRequests,
    massageReviewRequestResults
} from "@/index";
import { useEffect, useRef, useState } from "react";
import Pagination from "./pagination";
import PendingCard from "./pending-card";
import ResultCard from "./result-card";
import { getReviewRequests, getReviewRequestResults } from "../actions";

type Reqs = typeof massageReviewRequests.$inferSelect[];
type ReqResults = typeof massageReviewRequestResults.$inferSelect[];

type CommonProps = {
    reqs: Reqs;
    reqResults: ReqResults;
};

export default function Common({
    reqs,
    reqResults,
}: CommonProps) {
    const [reqCurrentPage, setReqCurrentPage] = useState(1);
    const [reqResultsCurrentPage, setReqResultsCurrentPage] = useState(1);
    const [partReqs, setPartReqs] = useState<Reqs>(reqs.slice(0, 5));
    const [partReqResults, setPartReqResults] = useState<ReqResults>(reqResults.slice(0, 5));
    const initFlag = useRef(true);
    const REVIEWS_PER_PAGE = 5;
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        if (initFlag.current) {
            initFlag.current = false;
            return;
        }

        (async () => {
            const reqs = await getReviewRequests();
            const reqResults = await getReviewRequestResults();

            setPartReqs(reqs.slice(
                (reqCurrentPage - 1) * REVIEWS_PER_PAGE,
                reqCurrentPage * REVIEWS_PER_PAGE
            ));
            setPartReqResults(reqResults.slice(
                (reqResultsCurrentPage - 1) * REVIEWS_PER_PAGE,
                reqResultsCurrentPage * REVIEWS_PER_PAGE
            ));
        })();
    }, [reqCurrentPage, reqResultsCurrentPage]);

    const reqTotalPages = Math.ceil(reqs.length / REVIEWS_PER_PAGE);
    const reqResultsTotalPages = Math.ceil(reqResults.length / REVIEWS_PER_PAGE);

    return (
        <div className="space-y-8">
            <div className="bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-800">
                <h2 className="text-2xl font-semibold mb-4 text-white">
                    요청 대기 중인 리뷰
                </h2>
                <div className="space-y-4">
                    {!partReqs.length ? (
                        <div className="flex flex-col items-center justify-center py-12 bg-gray-950 rounded-lg border border-gray-800">
                            <svg
                                className="w-12 h-12 text-gray-600 mb-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.5}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m10.5 0v10.5A2.25 2.25 0 0116.5 21h-9A2.25 2.25 0 015.25 19.5V9m13.5 0H5.25"
                                />
                            </svg>
                            <span className="text-gray-400 text-lg font-medium">요청 대기 중인 리뷰가 없습니다.</span>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {partReqs.map((review: any) => (
                                <PendingCard
                                    key={review.id}
                                    review={{
                                        id: review.id,
                                        author: review.author,
                                        comment: review.comment,
                                        createdAt: review.requestedAt,
                                    }} />
                            ))}
                            <Pagination
                                currentPage={reqCurrentPage}
                                totalPages={reqTotalPages}
                                onPageChange={setReqCurrentPage} />
                        </div>
                    )}
                </div>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-800 break-all">
                <h2 className="text-2xl font-semibold mb-4 text-white">
                    처리 완료된 리뷰
                </h2>
                <div>
                    {!partReqResults.length ? (
                        <div className="flex flex-col items-center justify-center py-12 bg-gray-950 rounded-lg border border-gray-800">
                            <svg
                                className="w-12 h-12 text-gray-600 mb-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.5}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="text-gray-400 text-lg font-medium">처리 완료된 리뷰가 없습니다.</span>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {partReqResults.map((review: any) => (
                                <ResultCard
                                    key={review.id}
                                    review={review} />
                            ))}
                            <Pagination
                                currentPage={reqResultsCurrentPage}
                                totalPages={reqResultsTotalPages}
                                onPageChange={setReqResultsCurrentPage} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}