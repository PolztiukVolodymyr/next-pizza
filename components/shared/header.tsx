"use client";

import {useState, FC} from "react";
import Image from "next/image";
import Link from "next/link";
import {cn} from "@/lib/utils";
import Container from "./container";
import ProfileButton from "./profile-button";
import CartButton from "./cart-button";
import {SearchInput} from "./search-input";
import {AuthModal} from "./modals/auth-modal/auth-modal";

type HeaderProps = {
	hasSearch?: boolean;
	hasCart?: boolean;
	className?: string;
};

const Header: FC<HeaderProps> = ({hasSearch = true, hasCart = true, className}) => {
	const [openAuthModal, setOpenAuthModal] = useState(false);

	return (
		<header className={cn("border-b", className)}>
			<Container className="flex items-center justify-between py-8">
				{/* Ліва частина */}
				<Link href="/">
					<div className="flex items-center gap-4">
						<Image src="/logo.png" alt="Logo" width={35} height={35} />
						<div>
							<h1 className="text-2xl uppercase font-black">Next Pizza</h1>
							<p className="text-sm text-gray-400 leading-3">Надзвичайно смачно</p>
						</div>
					</div>
				</Link>

				{hasSearch && (
					<div className="mx-10 flex-1">
						<SearchInput />
					</div>
				)}

				{/* Права частина */}
				<div className="flex items-center gap-3">
					<AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />

					<ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />

					{hasCart && <CartButton />}
				</div>
			</Container>
		</header>
	);
};

export default Header;
