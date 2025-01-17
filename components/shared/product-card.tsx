import { FC } from "react";
import Link from "next/link";
import { Title } from "./title";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
// import { Ingredient } from "@prisma/client";

type ProductCardProps = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    // ingredients: Ingredient[];

    className?: string;
};

const ProductCard: FC<ProductCardProps> = ({
    id,
    name,
    price,
    imageUrl,
    // ingredients,
    className,
}) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
                <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
                    <img
                        className='w-[215px] h-[215px]'
                        src={imageUrl}
                        alt={name}
                    />
                </div>

                <Title text={name} size='sm' className='mb-1 mt-3 font-bold' />

                {/* <p className='text-sm text-gray-400'>
                    {ingredients
                        .map((ingredient) => ingredient.name)
                        .join(", ")}
                </p> */}

                <p className='text-sm text-gray-400'>
                    {/* курка, моцарелла, помідори,часник, чедер , пармезан, соус
                    альфредо */}
                    томатний соус, моцарелла, ковбаса пепероні
                </p>

                <div className='flex justify-between items-center mt-4'>
                    <span className='text-[20px]'>
                        від <b>{price} грн.</b>
                    </span>

                    <Button variant='secondary' className='text-base font-bold'>
                        <Plus size={20} className='mr-1' />
                        Добавити
                    </Button>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
