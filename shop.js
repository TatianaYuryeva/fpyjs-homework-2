const goods = {
    1: {
        id: 1,
        name: 'Брюки',
        description: '',
        sizes: [],
        price: 4000,
        available: true
    },
    2: {
        id: 2,
        name: 'Рубашка',
        description: '',
        sizes: [],
        price: 4000,
        available: true,
    },
    3: {
        id: 3,
        name: 'Пальто',
        description: '',
        sizes: [],
        price: 14000,
        available: true,
    },
    4: {
        id: 4,
        name: 'Шарф',
        description: '',
        sizes: [],
        price: 1500,
        available: true,
    },
    5: {
        id: 5,
        name: 'Футболка',
        description: '',
        sizes: [],
        price: 1000,
        available: true,
    }
}

let basket = [
    {
        good: 1, 
        amount: 3,
    },
    {
        good: 4, 
        amount: 1,
    },
]

function addGood(goodId, amount) {
    basket.push({
        good: goodId, 
        amount: amount,})
}

function delGood(index) {
    basket.splice(index, 1)
}

function delAllGood() {
    basket.splice(0, basket.length)
}

console.log(goods[basket[0].good].price)
function getTotalBasket(basket, goods) {
    totalAmount = 0
    totalSumm = 0
    for(i = 0; i < basket.length; i++) {
        totalAmount = totalAmount + basket[i].amount
        totalSumm = totalSumm + goods[basket[i].good].price * basket[i].amount
    }
    total = {
        totalAmount: totalAmount,
        totalSumm: totalSumm,
    }
    return total
}

addGood(5, 2)
addGood(3, 2)
console.log(basket)

console.log(getTotalBasket(basket, goods))

delGood(basket.length - 1)
console.log(basket)

delAllGood()
console.log(basket)
