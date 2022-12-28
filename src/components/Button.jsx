import { twMerge } from "tailwind-merge";

const Button = ({ children, className, variant = "md", ...props }) => {
    const variants = variant.split(" ");

    return (
        <button
            className={twMerge(
                "bg-white font-bold text-black rounded-full",
                variants.includes("sm") && "px-4 py-1.5",
                variants.includes("md") && "text-xl px-5 py-3",
                variants.includes("hollow") && "border border-white",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
