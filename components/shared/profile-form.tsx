"use client";

import {FC} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import {signOut} from "next-auth/react";
import {TFormRegisterValues, formRegisterSchema} from "./modals/auth-modal/schemas";
import {User} from "@prisma/client";
import Container from "./container";
import {Title} from "./title";
import {FormInput} from "./form/form-input";
import {Button} from "../ui/button";
import {updateUserInfo} from "@/app/actions";

type ProfileFormProps = {
	data: User;
};

export const ProfileForm: FC<ProfileFormProps> = ({data}) => {
	const form = useForm({
		resolver: zodResolver(formRegisterSchema),
		defaultValues: {
			fullName: data.fullName,
			email: data.email,
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async (data: TFormRegisterValues) => {
		try {
			await updateUserInfo({
				email: data.email,
				fullName: data.fullName,
				password: data.password,
			});

			toast.error("Дані оновлені 📝", {
				icon: "✅",
			});
		} catch (error) {
			toast.error("Помилка оновлення даних", {
				icon: "❌",
			});
			console.log(error);
			return;
		}
	};

	const onClickSignOut = () => {
		signOut({
			callbackUrl: "/",
		});
	};

	return (
		<Container className="my-10">
			<Title text={`Особисті дані | #${data.id}`} size="md" className="font-bold" />

			<FormProvider {...form}>
				<form className="flex flex-col gap-5 w-96 mt-10" onSubmit={form.handleSubmit(onSubmit)}>
					<FormInput name="email" label="E-Mail" required />
					<FormInput name="fullName" label="Повне ім'я" required />

					<FormInput type="password" name="password" label="Новий пароль" required />
					<FormInput type="password" name="confirmPassword" label="Повторіть пароль" required />

					<Button disabled={form.formState.isSubmitting} className="text-base mt-10" type="submit">
						Зберегти
					</Button>

					<Button
						onClick={onClickSignOut}
						variant="secondary"
						disabled={form.formState.isSubmitting}
						className="text-base"
						type="button"
					>
						Вийти
					</Button>
				</form>
			</FormProvider>
		</Container>
	);
};
