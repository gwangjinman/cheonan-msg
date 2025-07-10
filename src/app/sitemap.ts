import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://cheonan-msg.kr",
            priority: 1,
            changeFrequency: "weekly",
            lastModified: "2025-07-11",
        },
        {
            url: "https://cheonan-msg.kr/asan",
            priority: 1,
            changeFrequency: "weekly",
            lastModified: "2025-07-11",
        },

        {
            url: "https://cheonan-msg.kr/cheonan-dongnamgu",
            priority: 1,
            changeFrequency: "weekly",
            lastModified: "2025-07-11",
        },

        {
            url: "https://cheonan-msg.kr/cheonan-seobukgu",
            priority: 1,
            changeFrequency: "weekly",
            lastModified: "2025-07-11",
        },

        {
            url: "https://cheonan-msg.kr/courses",
            priority: 1,
            changeFrequency: "weekly",
            lastModified: "2025-07-11",
        },

        {
            url: "https://cheonan-msg.kr/reviews",
            priority: 1,
            changeFrequency: "weekly",
            lastModified: "2025-07-11",
        },
    ];
}