export const categories = [
	{name: "Піцци"},
	{name: "Закуски"},
	{name: "Десерти"},
	{name: "Коктейлі"},
	{name: "Кава"},
];

export const _ingredients = [
	{
		name: "Сирний бортик",
		price: 79,
		imageUrl: "/ingredients/jalapeno_pepper.webp",
	},
	{
		name: "Вершкова моцарелла",
		price: 49,
		imageUrl: "/ingredients/creamy_mozzarella.webp",
	},
	{
		name: "Сири чеддер та пармезан",
		price: 49,
		imageUrl: "/ingredients/cheese_1.webp",
	},
	{
		name: "Гострий перець халапеньо",
		price: 39,
		imageUrl: "/ingredients/jalapeno_pepper.webp",
	},
	{
		name: "Ніжне курча",
		price: 49,
		imageUrl: "/ingredients/tender_chicken.webp",
	},
	{
		name: "Печериці",
		price: 39,
		imageUrl: "/ingredients/tender_chicken.webp",
	},
	{
		name: "Шинка",
		price: 59,
		imageUrl: "/ingredients/ham.webp",
	},
	{
		name: "Пікантна пепероні",
		price: 79,
		imageUrl: "/ingredients/pepperoni_sausage.webp",
	},
	{
		name: "Гостра чорізо",
		price: 79,
		imageUrl: "/ingredients/spicy_chorizo.webp",
	},
	{
		name: "Мариновані огірочки",
		price: 59,
		imageUrl: "/ingredients/pickled_cucumbers.webp",
	},
	{
		name: "Свіжі томати",
		price: 59,
		imageUrl: "/ingredients/tomatoes.webp",
	},
	{
		name: "Червона цибуля",
		price: 59,
		imageUrl: "/ingredients/red_onion.webp",
	},
	{
		name: "Соковиті ананаси",
		price: 59,
		imageUrl: "/ingredients/juicy_pineapples.webp",
	},
	{
		name: "Італійські трави",
		price: 39,
		imageUrl: "/ingredients/jalapeno_pepper.webp",
	},
	{
		name: "Солодкий перець",
		price: 39,
		imageUrl: "/ingredients/jalapeno_pepper.webp",
	},
	{
		name: "Кубики бринзи",
		price: 49,
		imageUrl: "/ingredients/jalapeno_pepper.webp",
	},
	{
		name: "Мітболи",
		price: 59,
		imageUrl: "/ingredients/jalapeno_pepper.webp",
	},
].map((obj, index) => ({id: index + 1, ...obj}));

export const products = [
	{
		name: "Омлет з шинкою та грибами",
		imageUrl: "/products/mushrooms_omelette.webp",
		categoryId: 2,
	},
	{
		name: "Омлет із пепероні",
		imageUrl: "/products/pepperoni_omelette.webp",
		categoryId: 2,
	},
	{
		name: "Гамбургер",
		imageUrl: "/products/snack_1.webp",
		categoryId: 2,
	},
	{
		name: "Сирник шоколадний",
		imageUrl: "/products/dessert_1.webp",
		categoryId: 3,
	},
	{
		name: "Торт з полуницею",
		imageUrl: "/products/dessert_2.webp",
		categoryId: 3,
	},
	{
		name: "Торт шоколадний",
		imageUrl: "/products/dessert_3.webp",
		categoryId: 3,
	},
	{
		name: "Банановий молочний коктейль",
		imageUrl: "/products/cocktail_1.webp",
		categoryId: 4,
	},
	{
		name: "Карамельне яблуко молочний коктейль",
		imageUrl: "/products/cocktail_1.webp",
		categoryId: 4,
	},
	{
		name: "Молочний коктейль із печивом Орео",
		imageUrl: "/products/milk_cocktail.webp",
		categoryId: 4,
	},
	{
		name: "Класичний молочний коктейль 👶",
		imageUrl: "/products/milk_cocktail.webp",
		categoryId: 4,
	},
	{
		name: "Ірландський Капучіно",
		imageUrl: "/products/coffee1.webp",
		categoryId: 5,
	},
	{
		name: "Карамельне капучино",
		imageUrl: "/products/coffee1.webp",
		categoryId: 5,
	},
	{
		name: "Кава Кокосова латте",
		imageUrl: "/products/coffee1.webp",
		categoryId: 5,
	},
	{
		name: "Кава Американо",
		imageUrl: "/products/coffee1.webp",
		categoryId: 5,
	},
	{
		name: "Кава Латте",
		imageUrl: "/products/coffee1.webp",
		categoryId: 5,
	},
];
