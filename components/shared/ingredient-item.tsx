import {FC} from "react";
import {cn} from "@/lib/utils";
import {CircleCheck} from "lucide-react";

type IngredientItemProps = {
	imageUrl: string;
	name: string;
	price: number;
	active?: boolean;
	onClick?: () => void;
	className?: string;
};

const IngredientItem: FC<IngredientItemProps> = ({className, active, price, name, imageUrl, onClick}) => {
	return (
		<div
			className={cn(
				"flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white",
				{"border border-primary": active},
				className,
			)}
			onClick={onClick}
		>
			{active && <CircleCheck className="absolute top-2 right-2 text-primary" />}
			<img width={100} height={100} src={imageUrl} alt="" />
			<span className="text-xs mb-1">{name}</span>
			<span className="font-bold">{price} грн.</span>
		</div>
	);
};

export default IngredientItem;
