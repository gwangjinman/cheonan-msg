"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { redirect, usePathname, useRouter } from "next/navigation";

type DesktopProps = {
    loggedIn: boolean;
};

export default function Desktop({
    loggedIn,
}: DesktopProps) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        asChild>
                        <Link
                            href="/"
                            className="font-medium px-4 hover:bg-gray-200">
                            천안출장마사지
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationLink
                        href="/asan">
                        아산출장마사지
                    </NavigationLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationLink
                        href="/cheonan-dongnamgu">
                        천안동남구출장마사지
                    </NavigationLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationLink
                        href="/cheonan-seobukgu">
                        천안서북구출장마사지
                    </NavigationLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationLink
                        href="/courses">
                        가격표
                    </NavigationLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationLink
                        href="/reviews">
                        이용 후기
                    </NavigationLink>
                </NavigationMenuItem>

                {loggedIn && (
                    <NavigationMenuItem>
                        <NavigationLink
                            href="/reviews/manage">
                            후기 관리
                        </NavigationLink>
                    </NavigationMenuItem>
                )}

                <NavigationMenuItem>
                    <NavigationLink
                        href="/login">
                        {loggedIn ? "로그아웃" : "로그인"}
                    </NavigationLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function NavigationLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    const router = useRouter();
    return (
        <NavigationMenuLink
            asChild>
            <Link
                href={href}
                onClick={(e) => {
                    if (children === "로그아웃") {
                        e.preventDefault();
                        document.cookie = 'token=; Max-Age=0; path=/;';
                        router.push("/");
                        router.refresh();
                    }
                }}
                className="font-medium px-4 hover:bg-gray-200">
                {children}
            </Link>
        </NavigationMenuLink>
    )
}

{/* <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        천안시 동남구
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid md:grid-cols-4 gap-2
                        w-[400px] md:w-[500px] lg:w-[600px]">
                            {dongnamgu.map((item) => (
                                <li key={item.title}>
                                    <NavigationMenuLink
                                        asChild
                                        className="items-center">
                                        <Link
                                            href={item.href}>
                                            {item.title}
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        천안시 서북구
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid md:grid-cols-4 gap-2
                        w-[400px] md:w-[500px] lg:w-[600px]">
                            {seobukgu.map((item) => (
                                <li key={item.title}>
                                    <NavigationMenuLink
                                        asChild
                                        className="items-center">
                                        <Link
                                            href={item.href}>
                                            {item.title}
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem> */}