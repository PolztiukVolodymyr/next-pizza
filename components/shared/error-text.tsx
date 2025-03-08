import {FC} from "react";
import {cn} from "@/lib/utils";

type ErrorTextProps = {
	text: string;
	className?: string;
};

export const ErrorText: FC<ErrorTextProps> = ({text, className}) => {
	return <p className={cn("text-red-500 text-sm", className)}>{text}</p>;
};
