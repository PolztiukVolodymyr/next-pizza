import {Prisma} from "@prisma/client";
import {categories, products, _ingredients} from "./constants";
import {prisma} from "./prisma-client";
import {hashSync} from "bcrypt";

const randomPrise = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
	productId,
	pizzaType,
	size,
	price,
}: {
	productId: number;
	pizzaType?: 1 | 2;
	size?: 20 | 30 | 40;
	price?: number;
}) => {
	return {
		productId,
		price: price || randomPrise(100, 150),
		pizzaType,
		size,
	} as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: "TestUser",
				email: "testUser@gmail.com",
				password: hashSync("1111111", 10),
				verified: new Date(),
				role: "USER",
			},
			{
				fullName: "TestAdmin",
				email: "testAdmin@gmail.com",
				password: hashSync("2222222", 10),
				verified: new Date(),
				role: "ADMIN",
			},
		],
	});

	await prisma.category.createMany({
		data: categories,
	});

	await prisma.ingredient.createMany({
		data: _ingredients,
	});

	await prisma.product.createMany({
		data: products,
	});

	const pizza1 = await prisma.product.create({
		data: {
			name: "Пепероні",
			imageUrl: "/products/pizza_pepperoni.webp",
			categoryId: 1,
			ingredients: {
				// connect: _ingredients.slice(0, 5),
				connect: [
					_ingredients[1],
					_ingredients[2],
					_ingredients[5],
					_ingredients[12],
					_ingredients[13],
				],
			},
		},
	});

	const pizza2 = await prisma.product.create({
		data: {
			name: "Сирна",
			imageUrl: "/products/pizza_cheese.webp",
			categoryId: 1,
			ingredients: {
				connect: [_ingredients[0], _ingredients[1], _ingredients[12], _ingredients[14]],
			},
		},
	});

	const pizza3 = await prisma.product.create({
		data: {
			name: "Чорізо",
			imageUrl: "/products/pizza_chorizo.webp",
			categoryId: 1,
			ingredients: {
				connect: [
					_ingredients[1],
					_ingredients[2],
					_ingredients[3],
					_ingredients[7],
					_ingredients[8],
				],
			},
		},
	});

	const pizza4 = await prisma.product.create({
		data: {
			name: "З грибами та овочами",
			imageUrl: "/products/pizza_mushrooms.webp",
			categoryId: 1,
			ingredients: {
				connect: [
					_ingredients[4],
					_ingredients[8],
					_ingredients[9],
					_ingredients[12],
					_ingredients[2],
				],
			},
		},
	});

	await prisma.productItem.createMany({
		data: [
			// Піцца "Пеппероні"
			generateProductItem({
				productId: pizza1.id,
				pizzaType: 1,
				size: 20,
				price: 77,
			}),
			generateProductItem({
				productId: pizza1.id,
				pizzaType: 1,
				size: 30,
				price: 97,
			}),
			generateProductItem({
				productId: pizza1.id,
				pizzaType: 1,
				size: 40,
				price: 117,
			}),
			// generateProductItem({
			// 	productId: pizza1.id,
			// 	pizzaType: 2,
			// 	size: 20,
			// 	price: 80,
			// }),
			generateProductItem({
				productId: pizza1.id,
				pizzaType: 2,
				size: 30,
				price: 107,
			}),
			generateProductItem({
				productId: pizza1.id,
				pizzaType: 2,
				size: 40,
				price: 127,
			}),

			// Піцца "Сирна"
			// generateProductItem({
			// 	productId: pizza2.id,
			// 	pizzaType: 1,
			// 	size: 20,
			// 	price: 70,
			// }),
			// generateProductItem({
			// 	productId: pizza2.id,
			// 	pizzaType: 1,
			// 	size: 30,
			// 	price: 90,
			// }),
			generateProductItem({
				productId: pizza2.id,
				pizzaType: 1,
				size: 40,
				price: 110,
			}),
			generateProductItem({
				productId: pizza2.id,
				pizzaType: 2,
				size: 20,
				price: 80,
			}),
			generateProductItem({
				productId: pizza2.id,
				pizzaType: 2,
				size: 30,
				price: 100,
			}),
			generateProductItem({
				productId: pizza2.id,
				pizzaType: 2,
				size: 40,
				price: 120,
			}),

			// Піцца "Чорізо"
			generateProductItem({
				productId: pizza3.id,
				pizzaType: 1,
				size: 20,
				price: 70,
			}),
			generateProductItem({
				productId: pizza3.id,
				pizzaType: 1,
				size: 30,
				price: 90,
			}),
			generateProductItem({
				productId: pizza3.id,
				pizzaType: 1,
				size: 40,
				price: 110,
			}),
			generateProductItem({
				productId: pizza3.id,
				pizzaType: 2,
				size: 20,
				price: 80,
			}),
			generateProductItem({
				productId: pizza3.id,
				pizzaType: 2,
				size: 30,
				price: 100,
			}),
			generateProductItem({
				productId: pizza3.id,
				pizzaType: 2,
				size: 40,
				price: 120,
			}),
			generateProductItem({
				productId: pizza4.id,
				pizzaType: 1,
				size: 30,
				price: 115,
			}),
			generateProductItem({
				productId: pizza4.id,
				pizzaType: 1,
				size: 40,
				price: 135,
			}),
			generateProductItem({
				productId: pizza4.id,
				pizzaType: 2,
				size: 30,
				price: 105,
			}),
			generateProductItem({
				productId: pizza4.id,
				pizzaType: 2,
				size: 40,
				price: 125,
			}),

			// Інші продукти
			generateProductItem({productId: 1}),
			generateProductItem({productId: 2}),
			generateProductItem({productId: 3}),
			generateProductItem({productId: 4}),
			generateProductItem({productId: 5}),
			generateProductItem({productId: 6}),
			generateProductItem({productId: 7}),
			generateProductItem({productId: 8}),
			generateProductItem({productId: 9}),
			generateProductItem({productId: 10}),
			generateProductItem({productId: 11}),
			generateProductItem({productId: 12}),
			generateProductItem({productId: 13}),
			generateProductItem({productId: 14}),
			generateProductItem({productId: 15}),
			generateProductItem({productId: 16}),
			generateProductItem({productId: 17}),
		],
	});
	await prisma.cart.createMany({
		data: [
			{
				userId: 1,
				totalAmount: 0,
				token: "11111",
			},
			{
				userId: 2,
				totalAmount: 0,
				token: "222222",
			},
		],
	});
	await prisma.cartItem.create({
		data: {
			productItemId: 1,
			cartId: 1,
			quantity: 2,
			ingredients: {
				connect: [{id: 1}, {id: 2}, {id: 3}],
			},
		},
	});
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
	try {
		await down();
		await up();
	} catch (er) {
		console.error(er);
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
