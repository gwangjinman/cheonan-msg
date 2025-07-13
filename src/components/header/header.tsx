import Desktop from "./desktop";
import Mobile from "./mobile";

type HeaderProps = {
    loggedIn: boolean;
};

export default function Header({
    loggedIn,
}: HeaderProps) {
    return (
        <div className="h-18 flex items-center justify-between md:justify-center">
            <a href="/"
                className="px-5
                text-2xl font-extrabold text-transparent
                bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-md
                tracking-tight select-none"
                style={{ letterSpacing: "0.05em" }}
            >
                런투유 출장마사지
            </a>

            <div className="hidden md:block">
                <Desktop
                    loggedIn={loggedIn} />
            </div>
            <div className="md:hidden">
                <Mobile
                    loggedIn={loggedIn} />
            </div>
        </div>
    );
}