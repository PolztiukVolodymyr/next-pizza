import {FC} from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {TFormLoginValues, formLoginSchema} from "./schemas";
import {Title} from "@/components/shared/title";
import {FormInput} from "@/components/shared/form/form-input";
import {Button} from "@/components/ui/button";
import {signIn} from "next-auth/react";

type LoginFormProps = {
	onClose?: VoidFunction;
};

export const LoginForm: FC<LoginFormProps> = ({onClose}) => {
	const form = useForm<TFormLoginValues>({
		resolver: zodResolver(formLoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: TFormLoginValues) => {
		try {
			const resp = await signIn("credentials", {
				...data,
				redirect: false,
			});

			if (!resp?.ok) {
				throw Error();
			}

			toast.success("Ви успішно увійшли до облікового запису", {
				icon: "✅",
			});

			onClose?.();
		} catch (error) {
			console.error("Error [LOGIN]", error);
			toast.error("Не вдалося увійти до облікового запису", {
				icon: "❌",
			});
		}
	};

	return (
		<FormProvider {...form}>
			<form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
				<div className="flex justify-between items-center">
					<div className="mr-2">
						<Title text="Вхід до облікового запису" size="md" className="font-bold" />
						<p className="text-gray-400">
							Введіть свою пошту, щоб увійти до свого облікового запису
						</p>
					</div>
					<Image
						src="/phone_in_hand.webp"
						alt="phone-icon"
						width={60}
						height={60}
						className="w-auto h-auto"
					/>
				</div>

				<FormInput name="email" label="E-Mail" required />
				<FormInput name="password" label="Пароль" type="password" required />

				<Button loading={form.formState.isSubmitting} className="h-12 text-base" type="submit">
					Увійти
				</Button>
			</form>
		</FormProvider>
	);
};
