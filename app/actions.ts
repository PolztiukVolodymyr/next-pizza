"use server";

import {prisma} from "@/prisma/prisma-client";
// import {PayOrderTemplate} from "@/shared/components";
// import {VerificationUserTemplate} from "@/shared/components/shared/email-temapltes/verification-user";
import {CheckoutFormValues} from "@/constants/checkout-form-schema";
// import {createPayment, sendEmail} from "@/shared/lib";
import {getUserSession} from "@/lib/get-user-session";
import {OrderStatus, Prisma} from "@prisma/client";
import {hashSync} from "bcrypt";
// import {OrderStatus} from "@prisma/client";
import {cookies} from "next/headers";
import {sendEmail} from "@/lib/send-email";
import {PayOrderTemplate} from "@/components/shared/email-temapltes/pay-order";

export async function createOrder(data: CheckoutFormValues) {
	try {
		const cookieStore = cookies();
		const cartToken = cookieStore.get("cartToken")?.value;

		if (!cartToken) {
			throw new Error("Cart token not found");
		}

		/* Знаходимо корзину по токену */
		const userCart = await prisma.cart.findFirst({
			include: {
				user: true,
				items: {
					include: {
						ingredients: true,
						productItem: {
							include: {
								product: true,
							},
						},
					},
				},
			},
			where: {
				token: cartToken,
			},
		});

		/*--------- Якщо корзина не знайдена повертаємо помилку ----------- */
		if (!userCart) {
			throw new Error("Cart not found");
		}

		/* ---------- Якщо корзина пуста повертаємо помилку -----------*/
		if (userCart?.totalAmount === 0) {
			throw new Error("Cart is empty");
		}

		/* -------------- Створюємо замовлення ------------- */
		const order = await prisma.order.create({
			data: {
				token: cartToken,
				fullName: data.firstName + " " + data.lastName,
				email: data.email,
				phone: data.phone,
				address: data.address,
				comment: data.comment,
				totalAmount: userCart.totalAmount,
				status: OrderStatus.PENDING,
				items: JSON.stringify(userCart.items),
			},
		});

		/* -------------  Очищаємо корзину -------------- */
		await prisma.cart.update({
			where: {
				id: userCart.id,
			},
			data: {
				totalAmount: 0,
			},
		});

		await prisma.cartItem.deleteMany({
			where: {
				cartId: userCart.id,
			},
		});

		await sendEmail(
			data.email,
			"Next Pizza / Оплатіть замовлення #" + order.id,
			PayOrderTemplate({
				orderId: order.id,
				totalAmount: order.totalAmount,
				paymentUrl: "https://next.privat24.ua/money-transfer/form/",
			}),
		);

		return "https://next.privat24.ua/money-transfer/form/";
	} catch (err) {
		console.log("[CreateOrder] Server error", err);
	}
}

// export async function createOrder(data: CheckoutFormValues) {
// 	try {
// 		const cookieStore = cookies();
// 		const cartToken = cookieStore.get("cartToken")?.value;

// 		if (!cartToken) {
// 			throw new Error("Cart token not found");
// 		}

// 		/* Знаходимо корзину по токену */
// 		const userCart = await prisma.cart.findFirst({
// 			include: {
// 				user: true,
// 				items: {
// 					include: {
// 						ingredients: true,
// 						productItem: {
// 							include: {
// 								product: true,
// 							},
// 						},
// 					},
// 				},
// 			},
// 			where: {
// 				token: cartToken,
// 			},
// 		});

// 		/* Якщо корзина не знайдена повертаємо помилку */
// 		if (!userCart) {
// 			throw new Error("Cart not found");
// 		}

// 		/* Якщо корзина пуста повертаємо помилку */
// 		if (userCart?.totalAmount === 0) {
// 			throw new Error("Cart is empty");
// 		}

// 		/* Створюємо замовлення */
// 		const order = await prisma.order.create({
// 			data: {
// 				token: cartToken,
// 				fullName: data.firstName + " " + data.lastName,
// 				email: data.email,
// 				phone: data.phone,
// 				address: data.address,
// 				comment: data.comment,
// 				totalAmount: userCart.totalAmount,
// 				status: OrderStatus.PENDING,
// 				items: JSON.stringify(userCart.items),
// 			},
// 		});

// 		/* Очищаємо корзину */
// 		await prisma.cart.update({
// 			where: {
// 				id: userCart.id,
// 			},
// 			data: {
// 				totalAmount: 0,
// 			},
// 		});

// 		await prisma.cartItem.deleteMany({
// 			where: {
// 				cartId: userCart.id,
// 			},
// 		});

// 		// const paymentData = await createPayment({
// 		// 	amount: order.totalAmount,
// 		// 	orderId: order.id,
// 		// 	description: "Оплата замовлення #" + order.id,
// 		// });

// 		// if (!paymentData) {
// 		// 	throw new Error("Payment data not found");
// 		// }

// 		// await prisma.order.update({
// 		// 	where: {
// 		// 		id: order.id,
// 		// 	},
// 		// 	data: {
// 		// 		paymentId: paymentData.id,
// 		// 	},
// 		// });

// 		// const paymentUrl = paymentData.confirmation.confirmation_url;

// 		// await sendEmail(
// 		// 	data.email,
// 		// 	"Next Pizza / Оплатіть замовлення #" + order.id,
// 		// 	PayOrderTemplate({
// 		// 		orderId: order.id,
// 		// 		totalAmount: order.totalAmount,
// 		// 		paymentUrl,
// 		// 	}),
// 		// );

// 		// return paymentUrl;

// 		return order;
// 	} catch (err) {
// 		console.log("[CreateOrder] Server error", err);
// 	}
// }

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
	try {
		const currentUser = await getUserSession();

		if (!currentUser) {
			throw new Error("Користувача не знайдено");
		}

		const findUser = await prisma.user.findFirst({
			where: {
				id: Number(currentUser.id),
			},
		});

		await prisma.user.update({
			where: {
				id: Number(currentUser.id),
			},
			data: {
				fullName: body.fullName,
				email: body.email,
				password: body.password ? hashSync(body.password as string, 10) : findUser?.password,
			},
		});
	} catch (err) {
		console.log("Error [UPDATE_USER]", err);
		throw err;
	}
}

// export async function registerUser(body: Prisma.UserCreateInput) {
// 	try {
// 		const user = await prisma.user.findFirst({
// 			where: {
// 				email: body.email,
// 			},
// 		});

// 		if (user) {
// 			if (!user.verified) {
// 				throw new Error("Пошта не підтверджена");
// 			}

// 			throw new Error("Користувач вже існує");
// 		}

// 		const createdUser = await prisma.user.create({
// 			data: {
// 				fullName: body.fullName,
// 				email: body.email,
// 				password: hashSync(body.password, 10),
// 			},
// 		});

// 		const code = Math.floor(100000 + Math.random() * 900000).toString();

// 		await prisma.verificationCode.create({
// 			data: {
// 				code,
// 				userId: createdUser.id,
// 			},
// 		});

// 		await sendEmail(
// 			createdUser.email,
// 			"Next Pizza / 📝 Підтвердження реєстрації",
// 			VerificationUserTemplate({
// 				code,
// 			}),
// 		);
// 	} catch (err) {
// 		console.log("Error [CREATE_USER]", err);
// 		throw err;
// 	}
// }
