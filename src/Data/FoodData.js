export function formatPrice(price){
    return price.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP'
    })
}

export const foodItems = [
    {
        name: 'Cheese Pizza',
        img: '/img/pizza1.jpg',
        section: 'pizza',
        price: 4990
    },
    {
        name: 'Pepperoni Pizza',
        img: '/img/pizza2.jpg',
        section: 'pizza',
        price: 4990
    },
    {
        name: 'Shrimp Pizza',
        img: '/img/pizza3.jpg',
        section: 'pizza',
        price: 4990
    },
    {
        name: 'Chicken Pizza',
        img: '/img/pizza4.jpg',
        section: 'pizza',
        price: 4990
    },
    {
        name: 'Veggie Pizza',
        img: '/img/pizza5.jpg',
        section: 'pizza',
        price: 4990
    },
    {
        name: 'Burger',
        img: '/img/pizza6.jpg',
        section: 'Burger',
        price: 3990
    },
    {
        name: 'Chesse Burger',
        img: '/img/pizza7.jpg',
        section: 'Burger',
        price: 3990
    },
    {
        name: 'Burger whit chips',
        img: '/img/pizza8.jpg',
        section: 'Burger',
        price: 3990
    },
    {  
        price: 1990,
        name: 'Bebidas',
        section: 'Bebestibles',
        choices: ['Coca-cola', 'Fanta', 'Sprite', 'Cerveza']
    }

];

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = []
    }
    res[food.section].push(food)
    return res;
}, {});
