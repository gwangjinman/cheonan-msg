import { drizzle } from 'drizzle-orm/neon-http';
import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const db = drizzle(process.env.DATABASE_URL!);

// 마사지 후기 테이블
export const massageReviews = pgTable("massageReviews", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    author: varchar("author", { length: 20 }).notNull(),
    // rating: integer('rating').notNull(), // rating from 1 to 5
    comment: varchar("comment", { length: 500 }).notNull(),
    createdAt: timestamp().notNull().defaultNow(),
});

// 후기 요청을 담는 테이블
export const massageReviewRequests = pgTable("massageReviewRequests", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    author: varchar("author", { length: 20 }).notNull(),
    comment: varchar("comment", { length: 500 }).notNull(),
    requestedAt: timestamp().notNull().defaultNow(),
});

// 요청 처리 결과를 담는 테이블
export const massageReviewRequestResults = pgTable("massageReviewRequestResults", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    author: varchar("author", { length: 20 }).notNull(),
    comment: varchar("comment", { length: 500 }).notNull(),
    requestedAt: timestamp().notNull().defaultNow(),
    processedAt: timestamp().notNull().defaultNow(),
    result: varchar("result", {
        enum: ["APPROVED", "REJECTED"],
    }).notNull(),
});