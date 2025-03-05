"use client";

import {FC} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {cn} from "@/lib/utils";
import {useCategoryStore} from "@/store/category";
import {Category} from "@prisma/client";

type CategoriesProps = {
	items: Category[];
	className?: string;
};

const Categories: FC<CategoriesProps> = ({items, className}) => {
	const categoryActiveId = useCategoryStore((state) => state.activeId);
	const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
	const router = useRouter();

	const handleClick = (name: string, id: number) => {
		router.replace(`/#${name}`);
		setActiveCategoryId(id);
	};

	return (
		<div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
			{items.map(({id, name}, index) => (
				<Link
					className={cn(
						"flex items-center font-bold rounded-2xl h-9 px-3 lg:h-11 lg:px-5",
						categoryActiveId === id && "bg-white shadow-md shadow-gray-200 text-primary",
					)}
					href={`/#${name}`}
					onClick={() => handleClick(name, id)}
					key={index}
				>
					<button>{name}</button>
				</Link>
			))}
		</div>
	);
};

export default Categories;
