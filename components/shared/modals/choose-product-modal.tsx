"use client";

import {FC} from "react";
import {useRouter} from "next/navigation";
import {Dialog, DialogContent} from "@/components/ui/dialog";
import {cn} from "@/lib/utils";
import ChooseProductForm from "../choose-product-form";
import {ProductWithRelations} from "@/@types/prisma";
import ChoosePizzaForm from "../choose-pizza-form";
// import {useCartStore} from "@/shared/store";
// import toast from "react-hot-toast";
// import {ProductForm} from "../product-form";

interface Props {
	product: ProductWithRelations;

	className?: string;
}

const ChooseProductModal: FC<Props> = ({product, className}) => {
	const router = useRouter();

	const firstItem = product.items[0];
	const isPizzaForm = Boolean(firstItem.pizzaType);

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					"p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
					className,
				)}
			>
				{isPizzaForm ? (
					<ChoosePizzaForm
						imageUrl={product.imageUrl}
						name={product.name}
						items={[]}
						ingredients={product.ingredients}
					/>
				) : (
					<ChooseProductForm imageUrl={product.imageUrl} name={product.name} price={120} />
				)}
				{/* <ProductForm product={product} onSubmit={() => router.back()} /> */}
			</DialogContent>
		</Dialog>
	);
};

export default ChooseProductModal;
