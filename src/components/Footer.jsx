import { twMerge } from "tailwind-merge";
import HeaderLogo from "./HeaderLogo";

const FooterTitle = ({ title, className }) => (
    <h1 className={twMerge("text-white font-semibold", className)}>{title}</h1>
);

const FooterLink = ({ title, href = "#", className }) => (
    <a className={twMerge("text-gray-400 mt-3 block", className)} href={href}>
        {title}
    </a>
);

const Footer = () => (
    <footer className="bg-black py-16 px-44">
        <div className="grid grid-cols-4">
            <div className="col-span-2">
                <HeaderLogo />
            </div>
            <div>
                <FooterTitle title="Weekend Builds" />
                <FooterLink title="Build your own AI Avatar" />
                <FooterLink title="Build your own AI writer w/ GPT-3" />
                <FooterLink title="ENS" />
                <FooterLink title="Solidity" />
                <FooterLink title="Ethereum NFT" />
                <FooterLink title="Solana Web3 App" />
                <FooterLink title="DAOs" />
                <FooterLink title="Solana Pay" />
                <FooterLink title="Solana NFT" />
                <FooterLink title="NFT Game Flow" />
            </div>
            <div>
                <FooterTitle title="Level up" />
                <FooterLink title="Solana Core" />
                <FooterLink title="Nights & Weekends" />

                <FooterTitle title="About us" className="mt-5" />
                <FooterLink title="Join us" />
            </div>
        </div>
        <div className="mt-14">
            <div className="text-white flex items-center gap-6 text-sm">
                <span>© 2022 Zip Education Inc.</span>{" "}
                <a href="#" className="underline">
                    Privacy Policy
                </a>{" "}
                <a className="underline">Terms of Service</a>
            </div>
        </div>
    </footer>
);

export default Footer;
