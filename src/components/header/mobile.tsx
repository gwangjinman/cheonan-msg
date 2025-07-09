"use client";

import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { dongnamgu, seobukgu } from "../../app/dong-list";
import Link from "next/link";

export default function Mobile() {
    const [isOpen, setIsOpen] = useState(false);
    const [subOpen, setSubOpen] = useState<boolean[]>(
        Array(2).fill(false));
    const [heights, setHeights] = useState<number[]>(
        Array(2).fill(0));

    const reset = () => {
        setIsOpen(false);
        setSubOpen(Array(2).fill(false));
        setHeights(Array(2).fill(0));
    };

    const toggleSubMenu = (index: number, list: any) => {
        const newSubOpen = [...subOpen];
        newSubOpen[index] = !newSubOpen[index];
        setSubOpen(newSubOpen);

        const newHeights = [...heights];
        newHeights[index] = newSubOpen[index] ? list.length * 56 : 0;
        setHeights(newHeights);
    };

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
                                    천안 출장 마사지
                                </MobileLink>
                            </li>

                            <li>
                                <MobileLink
                                href="/asan"
                                onClick={reset}>
                                    아산 출장 마사지
                                </MobileLink>
                            </li>

                            <li>
                                <MobileLink
                                href="/cheonan-dongnamgu"
                                onClick={reset}>
                                    천안 동남구 출장 마사지
                                </MobileLink>
                            </li>

                            <li>
                                <MobileLink
                                href="/cheonan-seobukgu"
                                onClick={reset}>
                                    천안 서북구 출장 마사지
                                </MobileLink>
                            </li>

                            <li>
                                <MobileLink
                                href="/courses"
                                onClick={reset}>
                                    가격표
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
    return (
        <Link
            href={href}
            onClick={onClick}
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