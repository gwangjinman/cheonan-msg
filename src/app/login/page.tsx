import { type Metadata } from "next";
import LoginForm from "./login-form";

export const metadata: Metadata = {
    robots: "noindex, nofollow",
};

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        관리자 로그인
                    </h2>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}