CREATE TABLE "massageReviewRequestResults" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "massageReviewRequestResults_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"customerName" varchar(20) NOT NULL,
	"comment" varchar(500) NOT NULL,
	"requestedAt" timestamp NOT NULL,
	"processedAt" timestamp DEFAULT now() NOT NULL,
	"result" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "massageReviewRequests" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "massageReviewRequests_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"customerName" varchar(20) NOT NULL,
	"comment" varchar(500) NOT NULL,
	"requestedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "massageReviews" ALTER COLUMN "customerName" SET DATA TYPE varchar(20);--> statement-breakpoint
ALTER TABLE "massageReviews" ALTER COLUMN "comment" SET DATA TYPE varchar(500);--> statement-breakpoint
ALTER TABLE "massageReviews" ALTER COLUMN "comment" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "massageReviews" ALTER COLUMN "createdAt" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "massageReviews" ALTER COLUMN "createdAt" TYPE timestamp USING "createdAt"::timestamp;--> statement-breakpoint
ALTER TABLE "massageReviews" ALTER COLUMN "createdAt" SET DEFAULT now();