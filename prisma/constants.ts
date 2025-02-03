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
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
	},
	{
		name: "Вершкова моцарелла",
		price: 49,
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
	},
	{
		name: "Сири чеддер та пармезан",
		price: 49,
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
	},
	{
		name: "Гострий перець халапеньо",
		price: 39,
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
	},
	{
		name: "Ніжне курча",
		price: 49,
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
	},
	{
		name: "Печериці",
		price: 39,
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
	},
	{
		name: "Шинка",
		price: 59,
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
	},
	{
		name: "Пікантна пепероні",
		price: 79,
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
	},
	{
		name: "Гостра чорізо",
		price: 79,
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
	},
	{
		name: "Мариновані огірочки",
		price: 59,
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
	},
	{
		name: "Свіжі томати",
		price: 59,
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
	},
	{
		name: "Червона цибуля",
		price: 59,
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
	},
	{
		name: "Соковиті ананаси",
		price: 59,
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
	},
	{
		name: "Італійські трави",
		price: 39,
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
	},
	{
		name: "Солодкий перець",
		price: 39,
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
	},
	{
		name: "Кубики бринзи",
		price: 49,
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
	},
	{
		name: "Мітболи",
		price: 59,
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
	},
].map((obj, index) => ({id: index + 1, ...obj}));

export const products = [
	{
		name: "Омлет з шинкою та грибами",
		imageUrl: "/products/mushrooms_omelette.png",
		categoryId: 2,
	},
	{
		name: "Омлет із пепероні",
		imageUrl: "/products/pepperoni_omelette.png",
		categoryId: 2,
	},
	{
		name: "Гамбургер",
		imageUrl: "/products/snack_1.png",
		categoryId: 2,
	},
	{
		name: "Сирник шоколадний",
		imageUrl: "/products/dessert_1.png",
		categoryId: 3,
	},
	{
		name: "Торт з полуницею",
		imageUrl: "/products/dessert_2.png",
		categoryId: 3,
	},
	{
		name: "Торт шоколадний",
		imageUrl: "/products/dessert_3.png",
		categoryId: 3,
	},
	{
		name: "Банановий молочний коктейль",
		imageUrl: "/products/cocktail_1.png",
		categoryId: 4,
	},
	{
		name: "Карамельне яблуко молочний коктейль",
		imageUrl: "/products/cocktail_1.png",
		categoryId: 4,
	},
	{
		name: "Молочний коктейль із печивом Орео",
		imageUrl: "/products/milk_cocktail.png",
		categoryId: 4,
	},
	{
		name: "Класичний молочний коктейль 👶",
		imageUrl: "/products/milk_cocktail.png",
		categoryId: 4,
	},
	{
		name: "Ірландський Капучіно",
		imageUrl: "/products/coffee1.png",
		categoryId: 5,
	},
	{
		name: "Карамельне капучино",
		imageUrl: "/products/coffee1.png",
		categoryId: 5,
	},
	{
		name: "Кава Кокосова латте",
		imageUrl: "/products/coffee1.png",
		categoryId: 5,
	},
	{
		name: "Кава Американо",
		imageUrl: "/products/coffee1.png",
		categoryId: 5,
	},
	{
		name: "Кава Латте",
		imageUrl: "/products/coffee1.png",
		categoryId: 5,
	},
];
