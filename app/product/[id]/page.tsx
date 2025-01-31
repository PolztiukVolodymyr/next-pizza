import Container from "@/components/shared/container";
import {prisma} from "@/prisma/prisma-client";
import {notFound} from "next/navigation";

const ProductPage = async ({params: {id}}: {params: {id: string}}) => {
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

	return <Container className="flex flex-col my-10">{/* <ProductForm product={product} /> */}</Container>;
};

export default ProductPage;
