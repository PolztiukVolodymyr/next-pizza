"use client";

import {FC, useState} from "react";
import {Ingredient, ProductItem} from "@prisma/client";

import PizzaImage from "./pizza-image";
import {Title} from "./title";
import {Button} from "../ui/button";
import GroupVariants from "./group-variants";
// import {PizzaSize, PizzaType, pizzaTypes} from "@/constants/pizza";
// import {IngredientItem} from "./ingredient-item";
import {cn} from "@/lib/utils";
import {mapPizzaType, PizzaSize, pizzaSizes, PizzaType, pizzaTypes} from "@/constants/pizza";
import IngredientItem from "./ingredient-item";
import {useSet} from "react-use";
// import {getPizzaDetails} from "@/lib";
// import {usePizzaOptions} from "@/hooks";

type Props = {
	imageUrl: string;
	name: string;
	ingredients: Ingredient[];
	items: ProductItem[];
	loading?: boolean;
	// onSubmit: (itemId: number, ingredients: number[]) => void;
	className?: string;
};

/**
 * Форма вибору піцци
 */
const ChoosePizzaForm: FC<Props> = ({name, items, imageUrl, ingredients, loading, className}) => {
	// const {size, type, selectedIngredients, availableSizes, currentItemId, setSize, setType, addIngredient} =
	// 	usePizzaOptions(items);

	// const {totalPrice, textDetaills} = getPizzaDetails(type, size, items, ingredients, selectedIngredients);

	// const handleClickAdd = () => {
	// 	if (currentItemId) {
	// 		onSubmit(currentItemId, Array.from(selectedIngredients));
	// 	}
	// };

	const [size, setSize] = useState<PizzaSize>(20);
	const [type, setType] = useState<PizzaType>(1);
	const [selectedIngredients, {toggle: addIngredient}] = useSet(new Set<number>([]));

	const textDetaills = `${size} см, ${mapPizzaType[type]} піцца`;
	const pizzaPrice = items.find((item) => item.pizzaType === type && item.size === size)?.price || 0;
	const totalIngredientsPrice = ingredients
		.filter((ingedient) => selectedIngredients.has(ingedient.id))
		.reduce((acc, ingredient) => acc + ingredient.price, 0);
	const totalPrice = pizzaPrice + totalIngredientsPrice;

	console.log("ChoosePizzaForm_items:", items);

	return (
		<div className={cn(className, "flex flex-1")}>
			<PizzaImage imageUrl={imageUrl} size={size} />

			<div className="w-[490px] bg-[#f7f6f5] p-5">
				<Title text={name} size="md" className="font-extrabold mb-1" />

				<p className="text-gray-400">{textDetaills}</p>

				<div className="flex flex-col gap-2 mt-1">
					<GroupVariants
						items={pizzaSizes}
						value={String(size)}
						onClick={(value) => setSize(Number(value) as PizzaSize)}
					/>

					{/* <GroupVariants
						items={availableSizes}
						value={String(size)}
						onClick={(value) => setSize(Number(value) as PizzaSize)}
					/> */}

					<GroupVariants
						items={pizzaTypes}
						value={String(type)}
						onClick={(value) => setType(Number(value) as PizzaType)}
					/>
				</div>

				<div className="bg-gray-50 p-5 rounded-md h-[320px] overflow-auto scrollbar mt-3">
					<div className="grid grid-cols-3 gap-3">
						{ingredients.map((ingredient) => (
							<IngredientItem
								key={ingredient.id}
								name={ingredient.name}
								price={ingredient.price}
								imageUrl={ingredient.imageUrl}
								onClick={() => addIngredient(ingredient.id)}
								active={selectedIngredients.has(ingredient.id)}
							/>
						))}
					</div>
				</div>

				<Button
					loading={loading}
					// onClick={handleClickAdd}
					className="h-[55px] px-10 text-base rounded-[18px] w-full mt-5"
				>
					Добавити в корзину за {totalPrice} грн
				</Button>
			</div>
		</div>
	);
};

export default ChoosePizzaForm;
