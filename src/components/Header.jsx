import Button from "./Button";
import HeaderLogo from "./HeaderLogo";

const HeaderLink = ({ href, children }) => (
    <a className="font-semibold text-gray-300 flex items-center gap-1.5">
        {children}
    </a>
);

const Header = () => {
    return (
        <header className="grid grid-cols-3 justify-center items-center fixed z-50 top-0 left-0 py-3 px-20 bg-white bg-opacity-0 backdrop-blur-2xl w-full">
            <HeaderLogo />
            <nav className="flex items-center gap-8 justify-center">
                <HeaderLink href="#">builds</HeaderLink>
                <HeaderLink href="#">n&w</HeaderLink>
                <HeaderLink href="#">
                    join{" "}
                    <span className="text-xs bg-white bg-opacity-20 px-1 rounded-sm">
                        9
                    </span>
                </HeaderLink>
            </nav>
            <div>
                <Button className="float-right" variant="sm">
                    Start
                </Button>
            </div>
        </header>
    );
};

export default Header;
