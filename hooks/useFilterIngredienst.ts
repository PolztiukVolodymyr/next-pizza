import {useState, useEffect} from "react";
import {Api} from "@/services/api-client";
import {Ingredient} from "@prisma/client";

type ReturnProps = {
	ingredients: Ingredient[];
	loading: boolean;
};

export const useFilterIngredients = (): ReturnProps => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchIngredients() {
			try {
				setLoading(true);
				const items = await Api.ingredients.getAll();
				setIngredients(items);
			} catch (error) {
				setLoading(false);
				console.log(error);
			} finally {
				setLoading(false);
			}
		}
		fetchIngredients();
	}, []);

	return {ingredients, loading};
};
