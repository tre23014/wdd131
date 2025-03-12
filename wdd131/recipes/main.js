import recipes from "./recipes.mjs";

console.log(recipes);

function getRandomIndex(maxNum) {
    return Math.floor(Math.random() * maxNum);
}


function recipeTemplate(recipe) {
    return `<figure class="recipe">
	<img src="${recipe.image}" alt="image of ${recipe.name}" />
	<figcaption>
		<ul class="recipe__tags">
			<li>${tagsTemplate(recipe.tags)}</li>
		</ul>
		<h2><a href="#">${recipe.name}</a></h2>
		<p class="recipe__ratings">
			${ratingTemplate(recipe.rating)}
		</p>
		<p class="recipe__description">
			${recipe.description}
		</p>
</figcaption>
</figure>`;

}

function tagsTemplate(tags) {
    // loop through the tags list and transform the strings to HTML

    return tags.map(tag => `<li>${tag}</li>`).join("");
}

function ratingTemplate(rating) {
    // begin building an html string using the ratings HTML written earlier as a model.
    let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars">`

    // our ratings are always out of 5, so create a for loop from 1 to 5
    for (let index = 1; index <= 5; index++) {
        if (index <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        }
        else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    // check to see if the current index of the loop is less than our rating
    // if so then output a filled star

    // else output an empty star

    // after the loop, add the closing tag to our string
    html += `</span>`
    // return the html string
    return html
}

const recipe = getRandomIndex(recipes);
console.log(recipeTemplate(recipe));

function renderRecipes(recipeList) {
    // get the element we will output the recipes into
    const outputElement = document.getElementById("recipes-container");

    // use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const recipesHTML = recipeList.map(recipeTemplate).join("");

    // Set the HTML strings as the innerHTML of our output element.
    outputElement.innerHTML = recipesHTML;
}

function init() {
    // get a random recipe
    const recipe = getRandomIndex(recipes)
    // render the recipe with renderRecipes.
    renderRecipes([recipe]);
}
init();

function filter(query) {
    query = query.toLowerCase();

    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query) ||
        recipe / description.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query))
    );

    filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));

    return filteredRecipes;
}

function searchHandler(event) {
    event.preventDefault();

    const searchInput = document.querySelector("input[type='search']");
    if (!seachInput) {
        console.error("Seach not found!");
        return;
    }

    const query = searchInput.value.trim();
    const filteredResults = filteredRecipes(query);

    renderRecipes(filteredResults);
}

document.querySelector("button[type='button']").addEventListener("click", searchHandler);