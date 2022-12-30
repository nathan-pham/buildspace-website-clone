import { twMerge } from "tailwind-merge";

const Section = ({ backgroundImage, variant, children }) => {
    return (
        <section className="h-screen w-full bg-cover sticky top-0">
            <img
                className={twMerge(
                    "w-full h-full absolute inset-0 object-cover z-0 brightness-50",
                    variant === "grayscale" && "saturate-0"
                )}
                src={backgroundImage}
            />
            <div className="absolute inset-0 flex items-center justify-center flex-col z-10 text-center">
                {children}
            </div>
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at center, transparent, rgba(0, 0, 0, 0.5))",
                }}
            ></div>
        </section>
    );
};

export default Section;
