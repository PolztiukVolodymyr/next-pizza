"use client";

import {FC} from "react";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {useCategoryStore} from "@/store/category";
// import {categories} from "@/data/categories";
import {Category} from "@prisma/client";
// import { useRouter } from "next/navigation";

type CategoriesProps = {
	// categories: [];
	items: Category[];
	className?: string;
};

const Categories: FC<CategoriesProps> = ({items, className}) => {
	const categoryActiveId = useCategoryStore((state) => state.activeId);
	// const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
	// const router = useRouter();

	// console.log("categoryActiveId:", categoryActiveId);

	// const handleClick = (name: string, id: number) => {
	//     router.replace(`/#${name}`);
	//     setActiveCategoryId(id);
	//     console.log("handleClick_Id: ", id);
	// };

	return (
		<div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
			{items.map(({id, name}, index) => (
				<Link
					className={cn(
						"flex items-center font-bold h-11 rounded-2xl px-5",
						categoryActiveId === id && "bg-white shadow-md shadow-gray-200 text-primary",
					)}
					href={`/#${name}`}
					// onClick={() => handleClick(name, id)}
					key={index}
				>
					<button>{name}</button>
				</Link>
			))}
		</div>
	);
};

export default Categories;
