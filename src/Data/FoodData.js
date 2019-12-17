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
        name: 'Burger Pizza',
        img: '/img/pizza6.jpg',
        section: 'Burguer'
    },
    {
        name: 'Gyro Pizza',
        img: '/img/pizza7.jpg',
        section: 'Burguer'
    },
    {
        name: 'Frie Pizza',
        img: '/img/pizza8.jpg',
        section: 'Burguer'
    }
];

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = []
    }
    res[food.section].push(food)
    return res;
}, {});
