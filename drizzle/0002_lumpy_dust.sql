ALTER TABLE "massageReviewRequestResults" RENAME COLUMN "customerName" TO "author";--> statement-breakpoint
ALTER TABLE "massageReviewRequests" RENAME COLUMN "customerName" TO "author";--> statement-breakpoint
ALTER TABLE "massageReviews" RENAME COLUMN "customerName" TO "author";