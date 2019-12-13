class Product {
    constructor(productJSON) {
        this.baseUrl = 'http://localhost:3000/api/v1/products'
        this.id = productJSON.id
        this.title = productJSON.title
        this.price = productJSON.price
        this.description = productJSON.description
        this.image = productJSON.image
    }

    renderCard() {
        const productCard = `<div class='card' data-id='${this.id}'>
        <img class="selectable" src='${this.image}' height="100" width="100">
        <h2 class="selectable">${this.title}</h2>
        <h3 class="selectable">${this.price} USD</h3>
        <p class="selectable">${this.description}</p>
        <button class="showable" data-product-id=${this.id} onclick="showProduct()">Show Product</button>
        <button class="removable" data-product-id=${this.id} onclick="deleteProduct()">Delete Product</button>
        </div>`
        return productCard
    }
}