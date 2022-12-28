import { twMerge } from "tailwind-merge";

const SectionTitle = ({ children, className, variant = "md" }) => {
    return (
        <h1
            className={twMerge(
                "text-white text-7xl font-extrabold",
                variant === "md" && "6xl max-w-2xl",
                variant === "lg" && "text-8xl max-w-3xl",
                className
            )}
        >
            {children}
        </h1>
    );
};

export default SectionTitle;
