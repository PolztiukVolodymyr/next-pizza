import {create} from "zustand";
import {CreateCartItemValues} from "@/services/dto/cart.dto";
import {Api} from "@/services/api-client";
import {getCartDetails} from "../lib/get-cart-details";
import {CartStateItem} from "../lib/get-cart-details";

// type CartStateItem = {
// 	id: number;
// 	quantity: number;
// 	name: string;
// 	imageUrl: string;
// 	price: number;
// 	disabled?: boolean;
// 	pizzaSize?: number | null;
// 	pizzaType?: number | null;
// 	ingredients: Array<{name: string; price: number}>;
// };

export interface CartState {
	loading: boolean;
	error: boolean;
	totalAmount: number;
	items: CartStateItem[];

	/* Отримання товарів з корзини */
	fetchCartItems: () => Promise<void>;

	/* Запит на обновлення кількості товару */
	updateItemQuantity: (id: number, quantity: number) => Promise<void>;

	/* Запит на добавляння товару в корзину */
	addCartItem: (values: CreateCartItemValues) => Promise<void>;

	/* Запит на видалення товару з корзини */
	removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set) => ({
	items: [],
	error: false,
	loading: true,
	totalAmount: 0,

	fetchCartItems: async () => {
		try {
			set({loading: true, error: false});
			const data = await Api.cart.getCart();
			set(getCartDetails(data));
		} catch (error) {
			console.error(error);
			set({error: true});
		} finally {
			set({loading: false});
		}
	},

	updateItemQuantity: async (id: number, quantity: number) => {
		try {
			set({loading: true, error: false});
			const data = await Api.cart.updateItemQuantity(id, quantity);
			set(getCartDetails(data));
		} catch (error) {
			console.error(error);
			set({error: true});
		} finally {
			set({loading: false});
		}
	},

	removeCartItem: async (id: number) => {
		try {
			set((state) => ({
				loading: true,
				error: false,
				items: state.items.map((item) => (item.id === id ? {...item, disabled: true} : item)),
			}));
			const data = await Api.cart.removeCartItem(id);
			set(getCartDetails(data));
		} catch (error) {
			console.error(error);
			set({error: true});
		} finally {
			set((state) => ({
				loading: false,
				items: state.items.map((item) => ({...item, disabled: false})),
			}));
		}
	},

	addCartItem: async (values: CreateCartItemValues) => {
		try {
			set({loading: true, error: false});
			const data = await Api.cart.addCartItem(values);
			set(getCartDetails(data));
		} catch (error) {
			console.error(error);
			set({error: true});
		} finally {
			set({loading: false});
		}
	},
}));
