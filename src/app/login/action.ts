"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

type State = {
    success: boolean;
    message: string;
};

export async function loginAction(
    prevState: State,
    formData: FormData
) {
    const id = formData.get("admin");
    const password = formData.get("password");

    if (id !== process.env.ID || password !== process.env.PASSWORD) {
        return {
            success: false,
            message: "아이디 또는 비밀번호가 일치하지 않습니다.",
        };
    }

    const payload = { id };
    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
        expiresIn: "720h",
    });
    const cookieStore = await cookies();
    cookieStore.set("token", token, {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    redirect("/reviews/manage");
}