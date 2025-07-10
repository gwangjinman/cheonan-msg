"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    return (
        <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2">
                <button
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(Math.max(1, currentPage - 5))}
                    className="p-2 h-9 w-9 flex items-center justify-center border border-gray-600 rounded-lg hover:bg-gray-700
                    text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    <ArrowLeft
                    className="h-4 w-4" />
                </button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const startPage = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
                    const pageNumber = startPage + i;

                    return (
                        <button
                        key={pageNumber}
                        onClick={() => onPageChange(pageNumber)}
                        className={`p-2 h-9 w-9 flex items-center justify-center rounded-lg transition-colors ${currentPage === pageNumber
                            ? 'bg-pink-600 text-white'
                            : 'border border-gray-600 hover:bg-gray-700 text-white cursor-pointer'
                            }`}
                    >
                        {pageNumber}
                    </button>
                    );
                })}
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 5))}
                    className="p-2 h-9 w-9 flex items-center border border-gray-600 rounded-lg
                    hover:bg-gray-700 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ArrowRight
                        className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}