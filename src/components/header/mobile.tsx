"use client";

import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { dongnamgu, seobukgu } from "../../app/dong-list";
import Link from "next/link";
import { useRouter } from "next/navigation";

type MobileProps = {
    loggedIn: boolean;
};

export default function Mobile({
    loggedIn,
}: MobileProps) {
    const [isOpen, setIsOpen] = useState(false);
    const reset = () => setIsOpen(false);

    return (
        <div>
            <button
                className="py-4 px-6 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <X />
                ) : (
                    <Menu />
                )}
            </button>

            {isOpen && (
                <div className="hidden-scrollbar
                fixed inset-0 top-[72px] z-50 bg-white
            overflow-y-scroll overscroll-y-none">
                    <div className="absolute" style={{
                        width: "1px",
                        height: "calc(100% + 2px)",
                    }} />
                    <nav>
                        <ul>
                            <li>
                                <MobileLink
                                    href="/"
                                    onClick={reset}>
                                    천안출장마사지
                                </MobileLink>
                            </li>

                            <li>
                                <MobileLink
                                    href="/asan"
                                    onClick={reset}>
                                    아산출장마사지
                                </MobileLink>
                            </li>

                            <li>
                                <MobileLink
                                    href="/cheonan-dongnamgu"
                                    onClick={reset}>
                                    천안동남구출장마사지
                                </MobileLink>
                            </li>

                            <li>
                                <MobileLink
                                    href="/cheonan-seobukgu"
                                    onClick={reset}>
                                    천안서북구출장마사지
                                </MobileLink>
                            </li>

                            <li>
                                <MobileLink
                                    href="/courses"
                                    onClick={reset}>
                                    가격표
                                </MobileLink>
                            </li>

                            <li>
                                <MobileLink
                                    href="/reviews"
                                    onClick={reset}>
                                    이용 후기
                                </MobileLink>
                            </li>

                            {loggedIn && (
                                <li>
                                    <MobileLink
                                        href="/reviews/manage"
                                        onClick={reset}>
                                        후기 관리
                                    </MobileLink>
                                </li>
                            )}

                            <li>
                                <MobileLink
                                    href="/login"
                                    onClick={reset}>
                                    {loggedIn ? "로그아웃" : "로그인"}
                                </MobileLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
}

function MobileLink({
    href,
    children,
    onClick,
}: {
    href: string;
    children: React.ReactNode;
    onClick: () => void;
}) {
    const router = useRouter();

    return (
        <Link
            href={href}
            onClick={(e) => {
                if (children === "로그아웃") {
                    e.preventDefault();
                    document.cookie = 'token=; Max-Age=0; path=/;';
                    router.push("/");
                    router.refresh();
                }
                onClick();
            }}
            className="block w-full p-4
             hover:bg-neutral-100 cursor-pointer">
            {children}
        </Link>
    );
}

{/* <li>
                                <div>
                                    <button className="w-full p-4
                                    flex items-center justify-between
                                    hover:bg-neutral-100 cursor-pointer"
                                        onClick={() => toggleSubMenu(0, dongnamgu)}>
                                        동남구
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform
                                            ${subOpen[0] ? "rotate-180" : "rotate-0"}`} />
                                    </button>
                                    <ul className="overflow-y-hidden transition-[height]"
                                        style={{
                                            height: heights[0],
                                        }}>
                                        {dongnamgu.map((item) => (
                                            <li key={item.title}>
                                                <Link
                                                    href={item.href}
                                                    className="block p-4 pl-6
                                                    hover:bg-neutral-100 cursor-pointer"
                                                    onClick={reset}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <button
                                        className="w-full p-4
                                        flex items-center justify-between
                                        hover:bg-neutral-100 cursor-pointer"
                                        onClick={() => toggleSubMenu(1, seobukgu)}>
                                        서북구
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform
                                            ${subOpen[1] ? "rotate-180" : "rotate-0"}`} />
                                    </button>
                                    <ul className="overflow-y-hidden transition-[height]"
                                        style={{
                                            height: heights[1],
                                        }}>
                                        {seobukgu.map((item) => (
                                            <li key={item.title}>
                                                <Link
                                                    href={item.href}
                                                    className="block p-4 pl-6
                                                    hover:bg-neutral-100 cursor-pointer"
                                                    onClick={reset}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li> */}