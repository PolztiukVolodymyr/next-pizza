import {FC} from "react";
import {cn} from "@/lib/utils";
import {ArrowUpDown} from "lucide-react";

type SortPopupProps = {
	className?: string;
};

const SortPopup: FC<SortPopupProps> = ({className}) => {
	return (
		<div
			className={cn(
				"inline-flex items-center gap-1 bg-gray-50 px-3 h-11 lg:px-5 lg:h-[52px] rounded-2xl cursor-pointer",
				className,
			)}
		>
			<ArrowUpDown size={16} />
			<b>Сортування:</b>
			<b className="text-primary">популярне</b>
		</div>
	);
};

export default SortPopup;
