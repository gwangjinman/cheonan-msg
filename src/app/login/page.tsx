"use client";

import React, { useActionState, useEffect, useState } from "react";
import { loginAction } from './action';

export default function LoginPage() {
    const [adminName, setAdminName] = useState('');
    const [password, setPassword] = useState('');
    const [state, action, pending] = useActionState(loginAction, {
        message: "",
        success: false,
    });

    return (
        <div className="flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        관리자 로그인
                    </h2>
                </div>
                <form className="mt-8 space-y-6"
                    action={action}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="admin" className="sr-only">
                                관리자명
                            </label>
                            <input
                                id="admin"
                                name="admin"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-800 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="관리자명"
                                value={adminName}
                                onChange={(e) => setAdminName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                비밀번호
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-800 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="비밀번호"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {!state.success && (
                        <div className="text-red-400 text-sm text-center">
                            {state.message}
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            {pending ? "로그인 중..." : "로그인"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}