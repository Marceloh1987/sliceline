export const foodItems = [
    {
        name: 'Cheese Pizza',
        img: '/img/pizza1.jpg',
        section: 'pizza'
    },
    {
        name: 'Pepperoni Pizza',
        img: '/img/pizza2.jpg',
        section: 'pizza'
    },
    {
        name: 'Shrimp Pizza',
        img: '/img/pizza3.jpg',
        section: 'pizza'
    },
    {
        name: 'Chicken Pizza',
        img: '/img/pizza4.jpg',
        section: 'pizza'
    },
    {
        name: 'Veggie Pizza',
        img: '/img/pizza5.jpg',
        section: 'pizza'
    },
    {
        name: 'Burger',
        img: '/img/pizza6.jpg',
        section: 'Burger'
    },
    {
        name: 'Chesse Burger',
        img: '/img/pizza7.jpg',
        section: 'Burger'
    },
    {
        name: 'Burger whit chips',
        img: '/img/pizza8.jpg',
        section: 'Burger'
    }
];

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = []
    }
    res[food.section].push(food)
    return res;
}, {});
