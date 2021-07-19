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
    }
]

// let couponDiv = document.createElement("div");
// couponDiv.setAttribute("id", "applyCoupon");
// document.body.append(couponDiv);

let couponDiv = document.getElementById("applyCoupon")
function applyCoupon() {
    
    let totalItems = document.createElement("p");
    let totalPrice = document.createElement("p");
    let priceAfterDiscount = document.createElement("p");
    let applyCode = document.createElement("p");
    let couponCode = document.createElement("input");
    let couponButton = document.createElement("button");
    couponButton.innerText = "Apply Code";
    couponButton.addEventListener("click", applyCode);
    let checkOut = document.createElement("button");
    checkOut.innerText = "Check Out";

    let total = 0;
    
    let count = products.length
    products.forEach(function (el) {
        // let sum = +(el.price);
        total += +(el.price);
    })
    totalPrice.innerText = `Total Price: ${total}`;
    totalItems.innerText = `Total Items: ${count}`;
    let disc = 0;
    
    priceAfterDiscount.innerText = `Price After Discount: ${disc}`;

    couponDiv.append(totalItems, totalPrice, priceAfterDiscount, applyCode, couponCode, couponButton, checkOut);

}
function applyCode() {
        if (couponCode.value == 'Masai30') {
            disc = total * 0.7;
        }
    }
applyCoupon();

function showProducts() {
    // let container = d;
    // container.innerHTML = null;
    // document.body.append(container);
    let container = document.getElementById("container");
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

showProducts();




