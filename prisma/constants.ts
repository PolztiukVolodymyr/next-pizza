export const categories = [
	{name: "Піцци"},
	{name: "Кава"},
	{name: "Закуски"},
	{name: "Десерти"},
	{name: "Коктейлі"},
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
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
		categoryId: 2,
	},
	{
		name: "Омлет із пепероні",
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
		categoryId: 2,
	},
	{
		name: "Кава Латте",
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
		categoryId: 2,
	},
	{
		name: "Денвіч шинка та сир",
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
		categoryId: 3,
	},
	{
		name: "Курячі нагетси",
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
		categoryId: 3,
	},
	{
		name: "Картопля з печі з соусом 🌱",
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
		categoryId: 3,
	},
	{
		name: "Додстер",
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
		categoryId: 3,
	},
	{
		name: "Гострий Додстер 🌶️🌶️",
		imageUrl: "https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg",
		categoryId: 3,
	},
	{
		name: "Банановий молочний коктейль",
		imageUrl: "/coffee1.png",
		categoryId: 4,
	},
	{
		name: "Карамельне яблуко молочний коктейль",
		imageUrl: "/coffee1.png",
		categoryId: 4,
	},
	{
		name: "Молочний коктейль із печивом Орео",
		imageUrl: "/coffee1.png",
		categoryId: 4,
	},
	{
		name: "Класичний молочний коктейль 👶",
		imageUrl: "/coffee1.png",
		categoryId: 4,
	},
	{
		name: "Ірландський Капучіно",
		imageUrl: "/coffee1.png",
		categoryId: 5,
	},
	{
		name: "Кава Карамельна капучино",
		imageUrl: "/coffee1.png",
		categoryId: 5,
	},
	{
		name: "Кава Кокосова латте",
		imageUrl: "/coffee1.png",
		categoryId: 5,
	},
	{
		name: "Кава Американо",
		imageUrl: "/coffee1.png",
		categoryId: 5,
	},
	{
		name: "Кава Латте",
		imageUrl: "/coffee1.png",
		categoryId: 5,
	},
];
