

new Vue({
	el: "#app",
	data: {
		fade: false,
		marca: 'Nike Hyperfuel 709ml',
		value: '$24,99',
		textheader: 'When you´re carrying the Nike Hyperful Water Bottle there will be no...',
		rating: 4,
		features: [
        			{name: "Capacity", value: 780,  max: 1000},
        			{name: "Durability", value: 70,  max: 100},
        			{name: "Weight", value: 300, max: 1000},

        		],
       images: [
       				{img: "img/bottle-blue.png"},
       				{img: "img/bottle-grey.png"},
       				{img: "img/bottle-green.png"}
       ],
       banners: [
    {
        img: 'http://www.caozhaoliang.com/1.jpg',
        link: 'http://www.caozhaoliang.com'
    },
    {
        img: 'http://www.caozhaoliang.com/2.jpg',
        link: 'http://www.caozhaoliang.com'
    },
    {
        img: 'http://www.caozhaoliang.com/3.jpg',
        link: 'http://www.caozhaoliang.com'
    }
]
	}
})