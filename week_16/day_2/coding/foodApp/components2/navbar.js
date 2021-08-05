
function navbar() {
    return `
        <div id="navbar">
            <h3><a class="latest" href="home.html">Home</a></h3>
            <div class="searchBar">
                <input type="text" id="searchFood" placeholder="Enter your food item" />
                <button id="search">Search</button>
            </div>
            <div class="options">
                <h3><a class="latest" href="latest.html">Latest Recipes</a></h3>
                <h3><a class="latest" href="recipe.html">Recipe of the Day</a></h3>
            </div>
        </div>
        
        <div id="data"></div>
        
        `
}

export default navbar;