import {FC} from "react";
import {cn} from "@/lib/utils";

type PizzaImage = {
	className?: string;
	imageUrl: string;
	size: 20 | 30 | 40;
};

const PizzaImage: FC<PizzaImage> = ({imageUrl, size, className}) => {
	return (
		<div className={cn("flex items-center justify-center flex-1 relative w-full", className)}>
			<img
				src={imageUrl}
				alt="Logo"
				className={cn("relative transition-all z-10 duration-300", {
					"w-[200px] h-[200px]": size === 20,
					"w-[250px] h-[250px]": size === 30,
					"w-[300px] h-[300px]": size === 40,
					"md:w-[270px] md:h-[270px]": size === 20,
					"md:w-[330px] md:h-[330px]": size === 30,
					"md:w-[400px] md:h-[400px]": size === 40,
					"lg:w-[300px] lg:h-[300px]": size === 20,
					"lg:w-[400px] lg:h-[400px]": size === 30,
					"lg:w-[500px] lg:h-[500px]": size === 40,
				})}
			/>

			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[250px] h-[250px] md:w-[385px] md:h-[385px] lg:w-[470px] lg:h-[470px]" />
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[300px] h-[300px] md:w-[325px] md:h-[325px] lg:w-[380px] lg:h-[380px]" />
		</div>
	);
};

export default PizzaImage;
