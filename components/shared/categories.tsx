"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";
// import { useCategoryStore } from "@store/category";
// import { Category } from "@prisma/client";

type CategoriesProps = {
    // categories: [];
    className?: string;
};

const Categories: FC<CategoriesProps> = ({ className }) => {
    // const categoryActiveId = useCategoryStore((state) => state.activeId);

    const categories = ["піцци", "кава", "закуски", "десерти", "коктейлі"];

    const activeIndex = 0;

    return (
        <div
            className={cn(
                "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl",
                className
            )}
        >
            {categories.map((cat, index) => (
                <a
                    className={cn(
                        "flex items-center font-bold h-11 rounded-2xl px-5",
                        activeIndex === index &&
                            "bg-white shadow-md shadow-gray-200 text-primary"
                    )}
                    // href={`/#${name}`}
                    key={index}
                >
                    <button>{cat}</button>
                </a>
            ))}
        </div>
    );
};

export default Categories;

// "use client";

// import { cn } from "@/shared/lib/utils";
// import { useCategoryStore } from "@/shared/store/category";
// import { Category } from "@prisma/client";
// import React from "react";

// interface Props {
//     items: Category[];
//     className?: string;
// }

// export const Categories: React.FC<Props> = ({ items, className }) => {
//     const categoryActiveId = useCategoryStore((state) => state.activeId);

//     return (
//         <div
//             className={cn(
//                 "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl",
//                 className
//             )}
//         >
//             {items.map(({ name, id }, index) => (
//                 <a
//                     className={cn(
//                         "flex items-center font-bold h-11 rounded-2xl px-5",
//                         categoryActiveId === id &&
//                             "bg-white shadow-md shadow-gray-200 text-primary"
//                     )}
//                     href={`/#${name}`}
//                     key={index}
//                 >
//                     <button>{name}</button>
//                 </a>
//             ))}
//         </div>
//     );
// };
