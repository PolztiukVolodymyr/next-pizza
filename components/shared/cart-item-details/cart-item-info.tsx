import {FC} from "react";
import {cn} from "@/lib/utils";

type Props = {
	name: string;
	details: string;
	className?: string;
};

export const CartItemInfo: FC<Props> = ({name, details, className}) => {
	return (
		<div>
			<div className={cn("flex items-center justify-between", className)}>
				<h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
			</div>
			{details && <p className="text-xs text-gray-400 w-[90%]">{details.toLowerCase()}</p>}
		</div>
	);
};
