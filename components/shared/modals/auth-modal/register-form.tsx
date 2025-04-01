"use client";

import {FC} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import {registerUser} from "@/app/actions";
import {TFormRegisterValues, formRegisterSchema} from "./schemas";
import {FormInput} from "@/components/shared/form/form-input";
import {Button} from "@/components/ui/button";

type RegisterFormProps = {
	onClose?: VoidFunction;
	// onClickLogin?: VoidFunction;
};

export const RegisterForm: FC<RegisterFormProps> = ({onClose}) => {
	const form = useForm<TFormRegisterValues>({
		resolver: zodResolver(formRegisterSchema),
		defaultValues: {
			email: "",
			fullName: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async (data: TFormRegisterValues) => {
		console.log(data);
		try {
			await registerUser({
				email: data.email,
				fullName: data.fullName,
				password: data.password,
			});

			toast.error("Реєстрація успішна 📝. Підтвердьте свою пошту", {
				icon: "✅",
			});

			onClose?.();
		} catch (error) {
			console.log(error);
			return toast.error(`${error}`, {
				icon: "❌",
			});
		}
	};

	return (
		<FormProvider {...form}>
			<form className="flex flex-col gap-3 lg:gap-5" onSubmit={form.handleSubmit(onSubmit)}>
				<FormInput name="email" label="E-Mail" required />
				<FormInput name="fullName" label="Повне ім'я" required />
				<FormInput name="password" label="Пароль" type="password" required />
				<FormInput name="confirmPassword" label="Підтвердьте пароль" type="password" required />

				<Button loading={form.formState.isSubmitting} className="h-12 text-base" type="submit">
					Зареєструватись
				</Button>
			</form>
		</FormProvider>
	);
};
