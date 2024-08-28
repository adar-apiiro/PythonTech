import { Environment, Paddle } from '@paddle/paddle-node-sdk'
 
function general() {
  const paddle = new Paddle('API_KEY') 

  const paddle = new Paddle('API_KEY', {
    environment: Environment.production, // or Environment.sandbox for accessing sandbox API
    logLevel: 'verbose' // or 'error' for less verbose logging
  })
}

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

async function createProduct(requestBody: CreateProductRequestBody) {
    try {
        // Pass the request body with the attributes required to create
        const product = await paddle.products.create(requestBody)
        // Returns a product entity
        return product
    } catch (e) {
        // Handle Network/API errors
    }
}

const product = await createProduct({ name: 'ChatApp Education', taxCategory: 'standard' })
console.log("Product", product)
