let products = [];
let cart = [];

const productContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const statusText = document.getElementById("status");

fetch("https://fakestoreapi.com/products")

.then(response => response.json())

.then(data => {
    products = data;

    displayProducts(products);
    calculateStats(products);

    statusText.textContent = "Products Loaded Successfully";
})

.catch(error => {
    console.log(error);
    statusText.textContent = "Error Loading Products";
})

.finally(() => {
    console.log("Fetch Completed");
});

function displayProducts(productList){

    productContainer.innerHTML = "";

    productList.forEach(product => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.image}">
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
            <p>Rating: ${product.rating.rate}</p>
            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>
        `;

        productContainer.append(card);
    });
}

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(value)
    );

    displayProducts(filteredProducts);
});

categorySelect.addEventListener("change", () => {

    const category = categorySelect.value;

    if(category === "all"){
        displayProducts(products);
        return;
    }

    const filteredProducts = products.filter(product =>
        product.category === category
    );

    displayProducts(filteredProducts);
});

const addToCart = (id) => {

    const product = products.find(p => p.id === id);

    cart.push(product);

    updateCart();
};

function removeFromCart(id){

    const index = cart.findIndex(item => item.id === id);

    if(index !== -1){
        cart.splice(index,1);
    }

    updateCart();
}

function updateCart(){

    cartCount.textContent = cart.length;

    cartItems.innerHTML = "";

    cart.forEach(item => {

        const div = document.createElement("div");

        div.classList.add("cart-card");

        div.innerHTML = `
            <h4>${item.title}</h4>
            <p>$${item.price}</p>
            <button onclick="removeFromCart(${item.id})">
                Remove
            </button>
        `;

        cartItems.append(div);
    });

    const totalPrice = cart.reduce(
        (total,item) => total + item.price,
        0
    );

    const total = document.createElement("h3");
    total.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

    cartItems.append(total);
}

function calculateStats(data){

    document.getElementById("totalProducts").textContent =
        data.length;

    const avg =
        data.reduce((sum,p)=>sum+p.price,0) / data.length;

    document.getElementById("avgPrice").textContent =
        avg.toFixed(2);

    const sorted = [...data].sort(
        (a,b)=>a.price-b.price
    );

    const lowest = sorted[0];
    const highest = sorted[sorted.length-1];

    document.getElementById("lowest").textContent =
        lowest.title;

    document.getElementById("highest").textContent =
        highest.title;
}