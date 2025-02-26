import {FC} from "react";
import {cn} from "@/lib/utils";
import Image from "next/image";

type ImageProps = {
	src: string;
	className?: string;
};

export const CartItemDetailsImage: FC<ImageProps> = ({src, className}) => {
	return <Image alt="cart image" className={cn("w-[60px] h-[60px]", className)} src={src} />;
};
