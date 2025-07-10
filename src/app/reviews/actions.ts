"use server";

import {
    db,
    massageReviewRequests,
    massageReviews,
    massageReviewRequestResults,
} from "@/index";
import { verifyJWT } from "@/lib/jwt";
import { desc, eq } from "drizzle-orm";
import jwt, { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { setTimeout } from "node:timers/promises";
import { Review } from "./type";

export async function getReviewRequests() {
    try {
        const reviewRequests = await db.
            select().
            from(massageReviewRequests).
            orderBy(desc(massageReviewRequests.id));
        return reviewRequests;
    } catch (err) {
        console.error("error getting review requests:", err);
    }
    return [];
}

export async function getReviewRequestResults() {
    try {
        const reviewRequestResults = await db.
            select().
            from(massageReviewRequestResults).
            orderBy(desc(massageReviewRequestResults.id));
        return reviewRequestResults;
    } catch (err) {
        console.error("error getting review requests:", err);
    }
    return [];
}

export async function getReviews() {
    try {
        const reviews = await db.
            select().
            from(massageReviews).
            orderBy(desc(massageReviews.id));
        return reviews;
    } catch (err) {
        console.error("error getting reviews:", err);
    }
    return [];
}

export async function createReview(formData: FormData) {
    try {
        const author = formData.get("author") as string;
        const comment = formData.get("comment") as string;
        const review = {
            author,
            comment,
        };
        if (!await verifyJWT()) {
            await db.
                insert(massageReviewRequests).
                values(review);
            return null;
        }
        await db.
            insert(massageReviews).
            values(review);
        await db
            .insert(massageReviewRequestResults)
            .values({
                ...review,
                result: "APPROVED"
            });
    } catch (err) {
        console.error("error creating review:", err);
        return null;
    }

    redirect("/reviews");
}

export async function saveReviewRequestResult(
    review: Review,
    result: "APPROVED" | "REJECTED"
) {
    try {
        if (result === "APPROVED") {
            await db
                .insert(massageReviews)
                .values({
                    author: review.author,
                    comment: review.comment,
                    createdAt: review.createdAt,
                });
        }
        await db
            .insert(massageReviewRequestResults)
            .values({
                author: review.author,
                comment: review.comment,
                requestedAt: review.createdAt,
                result,
            });
        await db
            .delete(massageReviewRequests)
            .where(eq(massageReviewRequests.id, review.id));
    } catch (err) {
        console.error("error saving review request:", err);
    }
}

export async function deleteReview(reviewId: number) {
    try {
        await db
            .delete(massageReviews)
            .where(eq(massageReviews.id, reviewId));
    } catch (err) {
        console.error("error deleting review:", err);
    }

    redirect("/reviews");
}