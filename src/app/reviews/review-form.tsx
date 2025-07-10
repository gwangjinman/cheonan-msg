"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createReview } from "./actions";

export default function ReviewForm() {
    const [author, setAuthor] = useState("");
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (!author || !comment) {
                alert("이름과 후기를 모두 입력해주세요.");
                return;
            } else if (author.length > 20 || comment.length > 500) {
                alert("이름은 최대 20자, 후기는 최대 500자까지 입력 가능합니다.");
                return;
            } 

            const formData = new FormData();
            formData.append("author", author);
            formData.append("comment", comment);
            setLoading(true);
            const result = await createReview(formData);
            if (!result) {
                alert("후기는 관리자 승인 후 등록됩니다.");
            }
        } catch (err) {
            console.error("후기 등록 중 오류 발생:", err);
        } finally {
            setAuthor("");
            setComment("");
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}
            className="mb-8 p-6 border border-gray-600 rounded-lg shadow-lg bg-gray-800">
            <h2 className="text-xl font-bold mb-4 text-white">이용 후기 작성</h2>
            <input
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="이름 (최대 20자)"
                className="w-full mb-3 p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <textarea
                name="content"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="후기를 입력하세요 (최대 500자)"
                className="w-full mb-4 p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
            />
            <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
                {loading ? "등록 중..." : "등록"}
            </button>
        </form>
    );
}