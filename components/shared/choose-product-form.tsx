import {FC} from "react";
import {cn} from "@/lib/utils";
import {Title} from "./title";
import {Button} from "../ui/button";

type Props = {
	imageUrl: string;
	name: string;
	price: number;
	loading?: boolean;
	onSubmit?: VoidFunction;
	className?: string;
};

/**
 * Форма вибору продукта
 */
const ChooseProductForm: FC<Props> = ({name, imageUrl, price, onSubmit, className, loading}) => {
	return (
		<div className={cn(className, "flex flex-1")}>
			<div className="flex items-center justify-center flex-1 relative w-full">
				<img
					src={imageUrl}
					alt={name}
					className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
				/>
			</div>

			<div className="w-60 md:w-[350px] lg:w-[490px] bg-[#f7f6f5] p-3 md:p-7 rounded-xl">
				<Title text={name} size="md" className="font-extrabold my-5" />

				<Button
					loading={loading}
					onClick={() => onSubmit?.()}
					className="h-12 mmd:h-[55px] px-10 text-sm md:text-base rounded-[18px] w-full mt-10"
				>
					Добавити в корзину за {price} грн.
				</Button>
			</div>
		</div>
	);
};

export default ChooseProductForm;
