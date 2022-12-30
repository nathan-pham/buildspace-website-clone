import { twMerge } from "tailwind-merge";

const SectionTitle = ({ children, className, variant = "md" }) => {
    return (
        <h1
            className={twMerge(
                "text-white text-7xl font-extrabold max-w-3xl",
                variant === "md" && "text-6xl",
                variant === "lg" && "text-8xl",
                className
            )}
        >
            {children}
        </h1>
    );
};

export default SectionTitle;
