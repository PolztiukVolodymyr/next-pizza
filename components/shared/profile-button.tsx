// import { useSession } from "next-auth/react";
import { FC } from "react";
import { Button } from "../ui/button";
import { User } from "lucide-react";
// import Link from "next/link";

type ProfileButtonProps = {
    onClickSignIn?: () => void;
    className?: string;
};

const ProfileButton: FC<ProfileButtonProps> = ({
    className,
    onClickSignIn,
}) => {
    // const { data: session } = useSession();

    return (
        <div className={className}>
            <Button
                onClick={onClickSignIn}
                variant='outline'
                className='flex items-center gap-2'
            >
                <User size={16} />
                Зайти
            </Button>
        </div>
    );
};

export default ProfileButton;

// return (
//     <div className={className}>
//         {!session ? (
//             <Button
//                 onClick={onClickSignIn}
//                 variant='outline'
//                 className='flex items-center gap-1'
//             >
//                 <User size={16} />
//                 Войти
//             </Button>
//         ) : (
//             <Link href='/profile'>
//                 <Button
//                     variant='secondary'
//                     className='flex items-center gap-2'
//                 >
//                     <CircleUser size={18} />
//                     Профиль
//                 </Button>
//             </Link>
//         )}
//     </div>
// );
