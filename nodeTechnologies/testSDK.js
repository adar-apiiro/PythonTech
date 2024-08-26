import { Paddle } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

function getProducts() {
    // creates an iterator instance
    const productCollection = paddle.products.list()
    return productCollection
}

try {
    // Creates an iterator to loop through paginated data.
    // At this point, It does not hold any data.
    const productCollection = getProducts()

    // Call `next()` to retrieve first page of the dataset
    const firstPage = await productCollection.next()
    console.log("First page data", firstPage)

    // Calling `next()` again will retrieve subsequent pages.
    const secondPage = await productCollection.next()
    console.log("Second page data", secondPage)
} catch (e) {
    // Handle Network/API errors
}