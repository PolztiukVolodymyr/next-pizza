"use client";

import {FC} from "react";
import {cn} from "@/lib/utils";
import {useRouter} from "next/navigation";
import {Dialog, DialogContent, DialogTitle} from "@/components/ui/dialog";
import {ProductWithRelations} from "@/@types/prisma";
import {ProductForm} from "../product-form";

type ProductModalProps = {
	product: ProductWithRelations;
	className?: string;
};

const ChooseProductModal: FC<ProductModalProps> = ({product, className}) => {
	const router = useRouter();

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					"p-0 bg-white overflow-hidden w-[500px] max-w-[500px] min-h-[300px] md:max-h-[500px] md:w-[800px] md:max-w-[750px] md:min-h-[400px] lg:w-[1000px] lg:max-w-[1000px] lg:min-h-[500px] lg:max-h-[700px]",
					className,
				)}
			>
				<DialogTitle className="hidden" />
				<ProductForm product={product} onSubmit={() => router.back()} />
			</DialogContent>
		</Dialog>
	);
};

export default ChooseProductModal;
