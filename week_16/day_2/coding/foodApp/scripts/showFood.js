

async function getFood(url) {

    try {
        let res = await fetch(url);
        let data = res.json();
        
        // console.log("data:", data);
        return data;
    }
    catch (err) {
        console.log("err:", err);
    }
}

function appendRecipes(items, parent) {
    let products = items.meals
    products.forEach(({strMealThumb, strMeal, strCategory, strTags}) => {
        let div = document.createElement("div");
        div.setAttribute("class", "dataDiv")
        let title = document.createElement("p");
        title.setAttribute("class", "name");
        let category = document.createElement("p");
        category.setAttribute("class", "cat");
        let tags = document.createElement("p");
        tags.setAttribute("class", "cat");
        let img = document.createElement("img");
        img.src = strMealThumb;
        title.innerText = strMeal;
        if (strCategory == undefined) {
            category.innerText = null;
        }
        else {
            category.innerText = strCategory;
        }
        if (strTags == undefined) {
            tags.innerText = null;
        }
        else {
            tags.innerText = strTags;
        }

        div.append(img, title, category, tags);

        parent.append(div);
    })
}





export { getFood, appendRecipes};