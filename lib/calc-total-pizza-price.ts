import {Ingredient, ProductItem} from "@prisma/client";
import {PizzaSize, PizzaType} from "../constants/pizza";

/**
 * Функція для підрахунку загальної вартості піцци
 *
 * @param type - тип тіста вибраної пицци
 * @param size - розмір вибраної пицци
 * @param items - список варіацій
 * @param ingredients - список інградієнтів
 * @param selectedIngredients - вибрані інградієнти
 *
 * @returns number загальна вартість
 */
export const calcTotalPizzaPrice = (
	type: PizzaType,
	size: PizzaSize,
	items: ProductItem[],
	ingredients: Ingredient[],
	selectedIngredients: Set<number>,
) => {
	const pizzaPrice = items.find((item) => item.pizzaType === type && item.size === size)?.price || 0;

	const totalIngredientsPrice = ingredients
		.filter((ingredient) => selectedIngredients.has(ingredient.id))
		.reduce((acc, ingredient) => acc + ingredient.price, 0);

	return pizzaPrice + totalIngredientsPrice;
};
