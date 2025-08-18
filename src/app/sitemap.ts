import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.cheonan-msg.kr";
    return [
        {
            url: baseUrl + "/",
            lastModified: '2025-08-19',
            priority: 1,
        },

        {
            url: `${baseUrl}/cheonan-dongnamgu`,
            lastModified: '2025-08-19',
            priority: 1,
        },

        {
            url: `${baseUrl}/cheonan-seobukgu`,
            lastModified: '2025-08-19',
            priority: 1,
        },

        {
            url: `${baseUrl}/asan`,
            lastModified: '2025-08-19',
            priority: 1,
        },

        {
            url: `${baseUrl}/reviews`,
            lastModified: '2025-08-19',
            priority: 1,
        },
        
        {
            url: `${baseUrl}/courses`,
            lastModified: '2025-08-19',
            priority: 1,
        },
    ]
}
