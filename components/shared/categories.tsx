"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import Link from "next/link";
// import { useRouter } from "next/navigation";

// import { Category } from "@prisma/client";

type CategoriesProps = {
    // categories: [];
    className?: string;
};

const Categories: FC<CategoriesProps> = ({ className }) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId);
    // const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    // const router = useRouter();

    const categories = [
        { id: 1, name: "Піцци" },
        { id: 2, name: "Кава" },
        { id: 3, name: "Закуски" },
        { id: 4, name: "Десерти" },
        { id: 5, name: "Коктейлі" },
    ];

    // console.log("categoryActiveId:", categoryActiveId);

    // const handleClick = (name: string, id: number) => {
    //     router.replace(`/#${name}`);
    //     setActiveCategoryId(id);
    //     console.log("handleClick_Id: ", id);
    // };

    return (
        <div
            className={cn(
                "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl",
                className
            )}
        >
            {categories.map(({ id, name }, index) => (
                <Link
                    className={cn(
                        "flex items-center font-bold h-11 rounded-2xl px-5",
                        categoryActiveId === id &&
                            "bg-white shadow-md shadow-gray-200 text-primary"
                    )}
                    href={`/#${name}`}
                    // onClick={() => handleClick(name, id)}
                    key={index}
                >
                    <button>{name}</button>
                </Link>
            ))}
        </div>
    );
};

export default Categories;
