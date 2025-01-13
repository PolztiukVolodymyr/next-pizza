"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
// import { CartDrawer } from "./cart-drawer";
// import { useCartStore } from "@/shared/store";

type CartButtonProps = {
    className?: string;
};

const CartButton: FC<CartButtonProps> = ({ className }) => {
    // const [totalAmount, items, loading] = useCartStore((state) => [
    //     state.totalAmount,
    //     state.items,
    //     state.loading,
    // ]);

    return (
        <div>
            <Button
                // loading={loading}
                className={cn(
                    "group relative",
                    // { "w-[105px]": loading },
                    className
                )}
            >
                <b>100 грн</b>
                <span className='h-full w-[1px] bg-white/30 mx-3' />
                <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                    <ShoppingCart
                        size={16}
                        className='relative'
                        strokeWidth={2}
                    />
                    <b>2</b>
                </div>
                <ArrowRight
                    size={20}
                    className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                />
            </Button>
        </div>
    );
};

export default CartButton;
