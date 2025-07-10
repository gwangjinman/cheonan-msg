import Desktop from "./desktop";
import Mobile from "./mobile";

type HeaderProps = {
    loggedIn: boolean;
};

export default function Header({
    loggedIn,
}: HeaderProps) {
    return (
        <div className="h-18 flex items-center justify-end md:justify-center">
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