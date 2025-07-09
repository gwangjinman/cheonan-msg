"use client";

import Link from "next/link";
import Desktop from "./desktop";
import Mobile from "./mobile";

export default function Header() {
    return (
        <div className="h-18 flex items-center justify-end md:justify-center">
            <div className="hidden md:block">
                <Desktop />
            </div>

            <div className="md:hidden">
                <Mobile />
            </div>
        </div>
    );
}