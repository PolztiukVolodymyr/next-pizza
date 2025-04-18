"use client";

import {useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {CheckoutFormValues, checkoutFormSchema} from "@/constants/checkout-form-schema";
import Container from "@/components/shared/container";
import {Title} from "@/components/shared/title";
import {CheckoutAddressForm, CheckoutPersonalForm} from "@/components/shared/checkout";
import {useCart} from "@/hooks/use-cart";
import {CheckoutCart} from "@/components/shared/checkout/checkout-cart";
import {CheckoutSidebar} from "@/components/shared/checkout-sidebar";
import toast from "react-hot-toast";
import {createOrder} from "@/app/actions";

export default function CheckoutPage() {
	const form = useForm<CheckoutFormValues>({
		resolver: zodResolver(checkoutFormSchema),
		defaultValues: {
			email: "",
			firstName: "",
			lastName: "",
			phone: "",
			address: "",
			comment: "",
		},
	});
	const [submitting, setSubmitting] = useState(false);
	const {totalAmount, updateItemQuantity, items, removeCartItem, loading} = useCart();

	const onClickCountButton = (id: number, quantity: number, type: "plus" | "minus") => {
		const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
		updateItemQuantity(id, newQuantity);
	};

	const onSubmit = async (data: CheckoutFormValues) => {
		try {
			setSubmitting(true);

			const url = await createOrder(data);

			toast.success("Замовлення успішно оформлено! 📝 Перехід на оплату... ", {
				icon: "✅",
			});

			if (url) {
				location.href = url;
			}
		} catch (err) {
			console.log(err);
			setSubmitting(false);
			toast.error("Не вдалось створити замовлення", {
				icon: "❌",
			});
		}
	};

	return (
		<Container className="mt-10">
			<Title text="Оформлення замовлення" className="font-extrabold mb-8 text-[36px]" />
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="flex gap-10">
						{/* Ліва частина */}
						<div className="flex flex-col gap-10 flex-1 mb-20">
							<CheckoutCart
								onClickCountButton={onClickCountButton}
								removeCartItem={removeCartItem}
								items={items}
								loading={loading}
							/>
							<CheckoutPersonalForm
								className={loading ? "opacity-40 pointer-events-none" : ""}
							/>
							<CheckoutAddressForm
								className={loading ? "opacity-40 pointer-events-none" : ""}
							/>
						</div>
						{/* Права частина */}

						<div className="w-[450px]">
							<CheckoutSidebar totalAmount={totalAmount} loading={loading || submitting} />
						</div>
					</div>
				</form>
			</FormProvider>
		</Container>
	);
}

// "use client";

// import {FormProvider, useForm} from "react-hook-form";
// import {zodResolver} from "@hookform/resolvers/zod";

// import {
// 	CheckoutSidebar,
// 	Container,
// 	Title,
// 	CheckoutAddressForm,
// 	CheckoutCart,
// 	CheckoutPersonalForm,
// } from "@/shared/components";
// import {CheckoutFormValues, checkoutFormSchema} from "@/shared/constants";
// import {useCart} from "@/shared/hooks";
// import {createOrder} from "@/app/actions";
// import toast from "react-hot-toast";
// import React from "react";
// import {useSession} from "next-auth/react";
// import {Api} from "@/shared/services/api-client";

// export default function CheckoutPage() {
// 	const [submitting, setSubmitting] = React.useState(false);
// 	const {totalAmount, updateItemQuantity, items, removeCartItem, loading} = useCart();
// 	const {data: session} = useSession();

// 	const form = useForm<CheckoutFormValues>({
// 		resolver: zodResolver(checkoutFormSchema),
// 		defaultValues: {
// 			email: "",
// 			firstName: "",
// 			lastName: "",
// 			phone: "",
// 			address: "",
// 			comment: "",
// 		},
// 	});

// 	React.useEffect(() => {
// 		async function fetchUserInfo() {
// 			const data = await Api.auth.getMe();
// 			const [firstName, lastName] = data.fullName.split(" ");

// 			form.setValue("firstName", firstName);
// 			form.setValue("lastName", lastName);
// 			form.setValue("email", data.email);
// 		}

// 		if (session) {
// 			fetchUserInfo();
// 		}
// 	}, [session]);

// 	const onSubmit = async (data: CheckoutFormValues) => {
// 		try {
// 			setSubmitting(true);

// 			const url = await createOrder(data);

// 			toast.error("Заказ успешно оформлен! 📝 Переход на оплату... ", {
// 				icon: "✅",
// 			});

// 			if (url) {
// 				location.href = url;
// 			}
// 		} catch (err) {
// 			console.log(err);
// 			setSubmitting(false);
// 			toast.error("Не удалось создать заказ", {
// 				icon: "❌",
// 			});
// 		}
// 	};

// 	const onClickCountButton = (id: number, quantity: number, type: "plus" | "minus") => {
// 		const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
// 		updateItemQuantity(id, newQuantity);
// 	};

// 	return (
// 		<Container className="mt-10">
// 			<Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]" />

// 			<FormProvider {...form}>
// 				<form onSubmit={form.handleSubmit(onSubmit)}>
// 					<div className="flex gap-10">
// 						{/* Левая часть */}
// 						<div className="flex flex-col gap-10 flex-1 mb-20">
// 							<CheckoutCart
// 								onClickCountButton={onClickCountButton}
// 								removeCartItem={removeCartItem}
// 								items={items}
// 								loading={loading}
// 							/>

// 							<CheckoutPersonalForm
// 								className={loading ? "opacity-40 pointer-events-none" : ""}
// 							/>

// 							<CheckoutAddressForm
// 								className={loading ? "opacity-40 pointer-events-none" : ""}
// 							/>
// 						</div>

// 						{/* Правая часть */}
// 						<div className="w-[450px]">
// 							<CheckoutSidebar totalAmount={totalAmount} loading={loading || submitting} />
// 						</div>
// 					</div>
// 				</form>
// 			</FormProvider>
// 		</Container>
// 	);
// }
