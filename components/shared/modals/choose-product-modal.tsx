"use client";

import {FC} from "react";
import {useRouter} from "next/navigation";
import {Dialog, DialogContent} from "@/components/ui/dialog";
import {cn} from "@/lib/utils";
import {Product} from "@prisma/client";

// import {ProductWithRelations} from "@/@types/prisma";
// import {useCartStore} from "@/shared/store";
// import toast from "react-hot-toast";
// import {ProductForm} from "../product-form";

interface Props {
	// product: ProductWithRelations;
	product: Product;
	className?: string;
}

const ChooseProductModal: FC<Props> = ({product, className}) => {
	const router = useRouter();

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					"p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
					className,
				)}
			>
				Here will be ProductForm
				{/* <ProductForm product={product} onSubmit={() => router.back()} /> */}
			</DialogContent>
		</Dialog>
	);
};

export default ChooseProductModal;
