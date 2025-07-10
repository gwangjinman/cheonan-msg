"use client";

import Link from "next/link";
import { useState } from "react";
import { Review } from "./type";
import { deleteReview } from "./actions";

type ReviewListProps = {
    reviews: Review[];
    currentPage: number;
    totalPages: number;
    loggedIn: boolean;
};

export default function ReviewList({
    reviews,
    currentPage,
    totalPages,
    loggedIn,
}: ReviewListProps) {
    return (
        <div>
            <div className="space-y-4 break-all">
                {!reviews.length ? (
                    <div className="flex flex-col items-center justify-center py-16 bg-gray-900 rounded-lg border border-gray-700">
                        <svg
                            className="w-12 h-12 mb-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                            />
                        </svg>
                        <span className="text-gray-400 text-lg font-medium">아직 등록된 리뷰가 없습니다.</span>
                    </div>
                ) : (
                    reviews.map((review) => (
                        <div key={review.id} className="p-5 border border-gray-600 rounded-lg shadow-lg bg-gray-800">
                            <div className="flex flex-col sm:flex-row justify-between items-center mb-2">
                                <div className="flex items-center space-x-3">
                                    <span className="font-semibold text-white">{review.author}</span>
                                    <div className="flex items-center space-x-1">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 text-yellow-400`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-1">
                                    <span className="text-sm text-gray-400">
                                        {review.createdAt.toLocaleDateString("ko-Kr")}
                                    </span>
                                    {loggedIn && (
                                        <button
                                            className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors duration-200"
                                            onClick={async () => {
                                                if (window.confirm("정말로 이 리뷰를 삭제하시겠습니까?")) {
                                                    await deleteReview(review.id);
                                                }
                                            }}
                                            aria-label="리뷰 삭제"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={1.5}
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                {review.comment}
                            </p>
                        </div>
                    )))}
            </div>

            <div className="flex justify-center mt-8 space-x-2">
                <Link
                    onClick={(e) => {
                        if (currentPage <= 1) {
                            e.preventDefault();
                        }
                    }}
                    href={`/reviews?page=${Math.max(1, currentPage - 5)}`}
                    className={`p-2 h-11 w-11 flex items-center justify-center rounded-lg transition-colors duration-200
                            font-medium bg-gray-700 text-gray-300
                            hover:bg-gray-600 border border-gray-600}`}
                >
                    ←
                </Link>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const startPage = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
                    const pageNumber = startPage + i;

                    return (
                        <Link
                            key={pageNumber}
                            href={`/reviews?page=${pageNumber}`}
                            className={`p-2 h-11 w-11 flex items-center justify-center rounded-lg transition-colors duration-200
                                font-medium ${currentPage === pageNumber
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600"}`}
                        >
                            {pageNumber}
                        </Link>
                    );
                })}
                <Link
                    onClick={(e) => {
                        if (currentPage >= totalPages) {
                            e.preventDefault();
                        }
                    }}
                    href={`/reviews?page=${Math.min(totalPages, currentPage + 5)}`}
                    className={`p-2 h-11 w-11 flex items-center justify-center rounded-lg transition-colors duration-200 font-medium
                        bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600`}
                >
                    →
                </Link>
            </div>
        </div>
    );
}