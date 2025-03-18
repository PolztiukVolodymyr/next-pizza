"use client";

import {FC, useState} from "react";
import Image from "next/image";
import {signIn} from "next-auth/react";
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogTitle} from "@/components/ui/dialog";
import {RegisterForm} from "./register-form";
import {LoginForm} from "./login-form";

type AuthModalProps = {
	open: boolean;
	onClose: () => void;
};

export const AuthModal: FC<AuthModalProps> = ({open, onClose}) => {
	const [type, setType] = useState<"login" | "register">("login");

	const onSwitchType = () => {
		setType(type === "login" ? "register" : "login");
	};

	const handleClose = () => {
		onClose();
	};

	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent className="w-[450px] bg-white p-10" aria-describedby={undefined}>
				{type === "login" ? (
					<LoginForm onClose={handleClose} />
				) : (
					<RegisterForm onClose={handleClose} />
				)}

				<hr />
				<div className="flex gap-2">
					<Button
						variant="secondary"
						onClick={() =>
							signIn("github", {
								callbackUrl: "/",
								redirect: true,
							})
						}
						type="button"
						className="gap-2 h-12 p-2 flex-1"
					>
						<Image
							alt="github"
							width={30}
							height={30}
							className="w-auto h-auto"
							src="/github_icon.webp"
						/>
						GitHub
					</Button>

					<Button
						variant="secondary"
						onClick={() =>
							signIn("google", {
								callbackUrl: "/",
								redirect: true,
							})
						}
						type="button"
						className="gap-2 h-12 p-2 flex-1"
					>
						<Image
							alt="google"
							width={22}
							height={22}
							className="w-6 h-6"
							src="/google_icon.webp"
						/>
						Google
					</Button>
				</div>

				<Button variant="outline" onClick={onSwitchType} type="button" className="h-12">
					{type !== "login" ? "Увійти" : "Реєстрація"}
				</Button>
				<DialogTitle className="hidden" />
			</DialogContent>
		</Dialog>
	);
};
