import Container from "@/components/shared/container";
import GroupVariants from "@/components/shared/group-variants";
import PizzaImage from "@/components/shared/pizza-image";
import {Title} from "@/components/shared/title";
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

	const tempItems = [
		{value: "1", name: "Піцци"},
		{value: "2", name: "Кава"},
		{value: "3", name: "Закуски"},
	];

	if (!product) {
		return notFound();
	}

	return (
		<Container className="flex flex-col my-10">
			<div className="flex flex-1">
				<PizzaImage imageUrl={product.imageUrl} size={20} />
				{/* <ProductForm product={product} /> */}
				<div className="w-[490px] bg-[#f7f6f5] p-7">
					<Title text={product.name} size="md" className="font-extrabold mb-1" />

					<p className="text-gray-400"> Here will be the textDetaills</p>

					<GroupVariants items={tempItems} value="1" />
				</div>
			</div>
		</Container>
	);
};

export default ProductPage;
