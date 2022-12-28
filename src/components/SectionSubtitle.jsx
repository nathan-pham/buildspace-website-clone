import { twMerge } from "tailwind-merge";

const SectionSubtitle = ({ children, className }) => {
    return (
        <p
            className={twMerge(
                "max-w-2xl text-gray-300 mt-10 text-xl",
                className
            )}
        >
            {children}
        </p>
    );
};

export default SectionSubtitle;
