import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function verifyJWT() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;
        if (token) {
            const payload = jwt.verify(token, process.env.JWT_SECRET!);
            return payload;
        }
    } catch {
        console.error("jwt verification failed:");
    }

    return null;
}