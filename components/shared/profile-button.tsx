import {FC} from "react";
import Link from "next/link";
import {useSession} from "next-auth/react";
import {Button} from "../ui/button";
import {CircleUser, User} from "lucide-react";

type ProfileButtonProps = {
	onClickSignIn?: () => void;
	className?: string;
};

const ProfileButton: FC<ProfileButtonProps> = ({className, onClickSignIn}) => {
	const {data: session} = useSession();

	return (
		<div className={className}>
			{!session ? (
				<Button onClick={onClickSignIn} variant="outline" className="flex items-center gap-1">
					<User size={16} />
					Увійти
				</Button>
			) : (
				<Link href="/profile">
					<Button variant="secondary" className="flex items-center gap-2">
						<CircleUser size={18} />
						Профіль
					</Button>
				</Link>
			)}
		</div>
	);
};

export default ProfileButton;
