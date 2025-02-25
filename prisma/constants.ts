export const categories = [
	{name: "Піцци"},
	{name: "Закуски"},
	{name: "Десерти"},
	{name: "Коктейлі"},
	{name: "Кава"},
];

export const _ingredients = [
	{
		name: "Вершкова моцарелла",
		price: 35,
		imageUrl: "/ingredients/creamy_mozzarella.webp",
	},
	{
		name: "Сири чеддер та пармезан",
		price: 45,
		imageUrl: "/ingredients/cheese_1.webp",
	},
	{
		name: "Гострий перець халапеньо",
		price: 15,
		imageUrl: "/ingredients/jalapeno_pepper.webp",
	},
	{
		name: "Ніжне курча",
		price: 24,
		imageUrl: "/ingredients/tender_chicken.webp",
	},
	{
		name: "Печериці",
		price: 23,
		imageUrl: "/ingredients/champignons.webp",
	},
	{
		name: "Шинка",
		price: 34,
		imageUrl: "/ingredients/ham.webp",
	},
	{
		name: "Пікантна пепероні",
		price: 37,
		imageUrl: "/ingredients/pepperoni_sausage.webp",
	},
	{
		name: "Гостра чорізо",
		price: 35,
		imageUrl: "/ingredients/spicy_chorizo.webp",
	},
	{
		name: "Мариновані огірочки",
		price: 23,
		imageUrl: "/ingredients/pickled_cucumbers.webp",
	},
	{
		name: "Свіжі томати",
		price: 24,
		imageUrl: "/ingredients/tomatoes.webp",
	},
	{
		name: "Червона цибуля",
		price: 15,
		imageUrl: "/ingredients/red_onion.webp",
	},
	{
		name: "Соковиті ананаси",
		price: 29,
		imageUrl: "/ingredients/juicy_pineapples.webp",
	},
	{
		name: "Італійські трави",
		price: 19,
		imageUrl: "/ingredients/italian_herbs.webp",
	},
	{
		name: "Солодкий перець",
		price: 32,
		imageUrl: "/ingredients/sweet_pepper.webp",
	},
	{
		name: "Кубики бринзи",
		price: 34,
		imageUrl: "/ingredients/cubes_of_cheese.webp",
	},
	{
		name: "Мітболи",
		price: 42,
		imageUrl: "/ingredients/meatballs.webp",
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
