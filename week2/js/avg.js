export const productData = {
    size:3,
    products:[
        {
            name:"Product 1",
            price:100
        },
        {
            name:"Product 2",
            price:700
        },
        {
            name:"Product 3",
            price:250
        }
    ]
};

export function avg(data){
    const priceAry = Object.values(data)[1]
                    .map(product => product.price);
    const priceAvg = (priceAry.reduce((a,b) => a + b)) / priceAry.length;

    console.log("assignment 3", priceAvg);
    return priceAvg
}
