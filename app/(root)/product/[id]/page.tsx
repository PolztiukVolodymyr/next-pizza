import {notFound} from "next/navigation";
import {prisma} from "@/prisma/prisma-client";
import Container from "@/components/shared/container";
import {ProductForm} from "@/components/shared/product-form";

export default async function ProductPage({params: {id}}: {params: {id: string}}) {
	const product = await prisma.product.findFirst({
		where: {id: Number(id)},
		include: {
			ingredients: true,
			category: {
				include: {
					products: {
						include: {
							items: true,
						},
					},
				},
			},
			items: true,
		},
	});

	if (!product) {
		return notFound();
	}

	return (
		<Container className="flex flex-col my-4 lg:my-10">
			<ProductForm product={product} />
		</Container>
	);
}
