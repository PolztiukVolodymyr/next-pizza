"use client";

import {FC, useRef, useEffect} from "react";
import {useIntersection} from "react-use";
import {cn} from "@/lib/utils";
import {Title} from "./title";

import ProductCard from "./product-card";
import {useCategoryStore} from "@/store/category";
import {ProductWithRelations} from "@/@types/prisma";

type Props = {
	title: string;
	items: ProductWithRelations[];
	categoryId: number;
	className?: string;
	listClassName?: string;
};

const ProductsGroupList: FC<Props> = ({title, items, listClassName, categoryId, className}) => {
	const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
	const intersectionRef = useRef(null);
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	});

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId);
		}
	}, [categoryId, intersection?.isIntersecting, setActiveCategoryId, title]);

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size="lg" className="font-extrabold mb-5" />

			<div
				className={cn(
					"grid grid-cols-1 gap-[30px] lg:grid-cols-2 lg:gap-[40px] xl:grid-cols-3 xl:gap-[50px]",
					listClassName,
				)}
			>
				{items.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						imageUrl={product.imageUrl}
						price={product.items[0].price}
						ingredients={product.ingredients}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductsGroupList;
