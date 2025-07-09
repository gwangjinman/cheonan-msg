"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Desktop() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        asChild>
                        <Link
                            href="/"
                            className="font-medium px-4 hover:bg-gray-200">
                            천안 출장 마사지
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationLink
                        href="/asan">
                        아산 출장 마사지
                    </NavigationLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationLink
                        href="/cheonan-dongnamgu">
                        천안 동남구
                    </NavigationLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationLink
                        href="/cheonan-seobukgu">
                        천안 서북구
                    </NavigationLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationLink
                        href="/courses">
                        가격표
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
    return (
        <NavigationMenuLink
            asChild>
            <Link
                href={href}
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