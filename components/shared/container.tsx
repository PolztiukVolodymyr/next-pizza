import { FC } from "react";
import { cn } from "@/lib/utils";

type HeaderProps = {
    className?: string;
};

const Container: FC<React.PropsWithChildren<HeaderProps>> = ({
    className,
    children,
}) => {
    return (
        <div className={cn("mx-auto max-w-[1280px]", className)}>
            {children}
        </div>
    );
};

export default Container;
