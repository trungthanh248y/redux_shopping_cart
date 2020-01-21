const initialState = [
    {
        id: 1,
        name: 'SamSung Note 10',
        image: "https://cdn.tgdd.vn/Products/Images/42/206176/samsung-galaxy-note-10-plus-blue-600x600.jpg",
        description: 'Sam pham do sam sung sx',
        price: 400,
        inventory: 44,
        rating: 4
    },
    {
        id: 2,
        name: 'SamSung galaxy s7',
        image: "https://clickbuy.com.vn/uploads/2019/07/thumb_Note10_1.jpg",
        description: 'Sam pham do sam sung sx',
        price: 600,
        inventory: 44,
        rating: 2
    },
    {
        id: 3,
        name: 'SamSung Note 11',
        image: "https://images.samsung.com/vn/smartphones/galaxy-note10/buy/m-img-note10-aurapink-01.png",
        description: 'Sam pham do sam sung sx',
        price: 800,
        inventory: 44,
        rating: 4
    },
]

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default products;