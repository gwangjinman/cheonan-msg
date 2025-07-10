CREATE TABLE "massageReviews" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "massageReviews_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"customerName" varchar(100) NOT NULL,
	"comment" varchar(1000),
	"createdAt" varchar(50) DEFAULT 'now()' NOT NULL
);
