

let products = [
    {
        productName: "Smart Phone",
        price: "11,799",
        brand: "Apple",
        image: "https://www.reliancedigital.in/medias/Xiaomi-8A-DUAL-Smart-Phones-491666927-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1OTgyNXxpbWFnZS9qcGVnfGltYWdlcy9oODQvaDljLzkyODk3OTcyNzE1ODIuanBnfGE1NjYzOWU3OWI3ODAzMTc1MjQ4NDFhYzhmNzZlMTRlM2U4YzYzMGM0ZWQ3YzlhNDcwYjMxN2MzMTgxYzdhY2U",
        image2: "https://cdn.mos.cms.futurecdn.net/GdcaWSadcCWbt3am8Typ3E.jpg"
    },
    {
        productName: "Smart Phone",
        price: "40,599",
        brand: "Apple",
        image: "https://www.reliancedigital.in/medias/Xiaomi-8A-DUAL-Smart-Phones-491666927-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1OTgyNXxpbWFnZS9qcGVnfGltYWdlcy9oODQvaDljLzkyODk3OTcyNzE1ODIuanBnfGE1NjYzOWU3OWI3ODAzMTc1MjQ4NDFhYzhmNzZlMTRlM2U4YzYzMGM0ZWQ3YzlhNDcwYjMxN2MzMTgxYzdhY2U",
        image2: "https://cdn.mos.cms.futurecdn.net/GdcaWSadcCWbt3am8Typ3E.jpg"
    },
    {
        productName: "Smart Phone",
        price: "11,999",
        brand: "Apple",
        image: "https://www.reliancedigital.in/medias/Xiaomi-8A-DUAL-Smart-Phones-491666927-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1OTgyNXxpbWFnZS9qcGVnfGltYWdlcy9oODQvaDljLzkyODk3OTcyNzE1ODIuanBnfGE1NjYzOWU3OWI3ODAzMTc1MjQ4NDFhYzhmNzZlMTRlM2U4YzYzMGM0ZWQ3YzlhNDcwYjMxN2MzMTgxYzdhY2U",
        image2: "https://cdn.mos.cms.futurecdn.net/GdcaWSadcCWbt3am8Typ3E.jpg"
    },
    {
        productName: "Smart Phone",
        price: "17,599",
        brand: "Apple",
        image: "https://www.reliancedigital.in/medias/Xiaomi-8A-DUAL-Smart-Phones-491666927-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1OTgyNXxpbWFnZS9qcGVnfGltYWdlcy9oODQvaDljLzkyODk3OTcyNzE1ODIuanBnfGE1NjYzOWU3OWI3ODAzMTc1MjQ4NDFhYzhmNzZlMTRlM2U4YzYzMGM0ZWQ3YzlhNDcwYjMxN2MzMTgxYzdhY2U",
        image2: "https://cdn.mos.cms.futurecdn.net/GdcaWSadcCWbt3am8Typ3E.jpg"
    },
    {
        productName: "Smart Phone",
        price: "15,000",
        brand: "Apple",
        image: "https://www.reliancedigital.in/medias/Xiaomi-8A-DUAL-Smart-Phones-491666927-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1OTgyNXxpbWFnZS9qcGVnfGltYWdlcy9oODQvaDljLzkyODk3OTcyNzE1ODIuanBnfGE1NjYzOWU3OWI3ODAzMTc1MjQ4NDFhYzhmNzZlMTRlM2U4YzYzMGM0ZWQ3YzlhNDcwYjMxN2MzMTgxYzdhY2U",
        image2: "https://cdn.mos.cms.futurecdn.net/GdcaWSadcCWbt3am8Typ3E.jpg"
    },
    {
        productName: "Smart Phone",
        price: "25,000",
        brand: "Apple",
        image: "https://www.reliancedigital.in/medias/Xiaomi-8A-DUAL-Smart-Phones-491666927-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1OTgyNXxpbWFnZS9qcGVnfGltYWdlcy9oODQvaDljLzkyODk3OTcyNzE1ODIuanBnfGE1NjYzOWU3OWI3ODAzMTc1MjQ4NDFhYzhmNzZlMTRlM2U4YzYzMGM0ZWQ3YzlhNDcwYjMxN2MzMTgxYzdhY2U",
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReyLMHwEsVYZPZj9iIhLxl77UpmfaT4nTmgw&usqp=CAU"
    },
]

let container = document.createElement("div");
container.setAttribute("id", "container");


function showProducts() {
    // let container = d;
    // container.innerHTML = null;
    document.body.append(container);

    products.forEach(function (el) {
        let productDiv = document.createElement("div");
        productDiv.setAttribute("id", "productDiv");
        let pName = document.createElement("p");
        pName.innerText = `${el.productName}`;
        let pPrice = document.createElement("p");
        pPrice.innerText = `${el.price}`;
        let pBrand = document.createElement("p");
        pBrand.innerText = `${el.brand}`;
        let image = document.createElement("img");
        image.src = el.image;

        let addToCart = document.createElement("button");
        addToCart.innerText = "Add To Cart";
        addToCart.setAttribute("onclick", "addToCart()")
        addToCart.setAttribute("class", "cartButton");
        // addToCart.addEventListener("mouseover", changePic);
        // addToCart.addEventListener("mouseleave", changeToOriginal);

        productDiv.append(image, pName, pPrice, pBrand, addToCart);
        container.append(productDiv);

        function changePic(el) {
            image.src = el.image2;
        }
        function changeToOriginal(el) {
            image.src = el.image;
        }
    })
    
    // addToCart(el);
}


// function addToCart(obj) {
//     let arr;
//     arr = localStorage.getItem("cart");
//     if (arr = null) {
//         arr = [];
//     }
//     else {
//         arr = JSON.parse(localStorage.getItem("cart"));
//     }
//     arr.push(obj);
//     localStorage.setItem("cart", JSON.stringify(arr));
//     showProducts(el);
// }
showProducts(JSON.parse(localStorage.getItem("products")));
localStorage.setItem("products", JSON.stringify(products));

let h2L = document.getElementById("h2L");
let l2H = document.getElementById("l2H");

function highToLow() {
    document.getElementById("container").innerHTML = null;
    let productData = JSON.parse(localStorage.getItem("products"));
    productData = products.sort(function (a, b) {
        return a.price - b.price;
    })
    console.log("Im high to low");
    showProducts(productData);
}

function lowToHigh() {
    document.getElementById("container").innerHTML = null;
    let productData = JSON.parse(localStorage.getItem("products"));
    productData = products.sort(function (a, b) {
        return b.price - a.price;
    })
    console.log("Im low to high");
    showProducts(productData);
}

function viewCart() {
    window.location.href = "cart.html";
}