import {FC} from "react";
import {cn} from "@/lib/utils";

type HeaderProps = {
	className?: string;
};

const Container: FC<React.PropsWithChildren<HeaderProps>> = ({className, children}) => {
	return (
		<div
			className={cn(
				"mx-auto max-w-[600px] md:max-w-[750px] lg:max-w-[970px] xl:max-w-[1200px] 2xl:max-w-[1400px]",
				className,
			)}
		>
			{children}
		</div>
	);
};

export default Container;
