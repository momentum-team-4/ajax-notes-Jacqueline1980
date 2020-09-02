
const newNote = document.querySelector("#recipeCard") //text area
const newRecipe = document.querySelector(".newRecipe") //button
const noteForm = document.querySelector("#notes-area") //form
const deleteRecipe = document.querySelector(".deleteRecipe") //button
const recipeList = document.querySelector("#recipeList")

//const newRecipe = document.getElementById("#newRecipe")


fetch('http://localhost:3000/notes/')
    .then(response => response.json())
    //when the page loads, get a new 'recipe card to type on'
    .then(recipes => {
        console.log(recipes)
        // take recipes and make DOM elements from them
        // const recipeCardEls
        // let recipe = recipes[37]
        // console.log(recipe)
        for (let recipe of recipes) {
            const recipeCardEl = document.createElement("div")
            recipeCardEl.className = "recipeCard"
            recipeCardEl.innerHTML = '<p>' + recipe.body + '</p>'
            recipeList.appendChild(recipeCardEl)
        }

    })




noteForm.addEventListener('submit', function (event) {
    event.preventDefault()
    fetch('http://localhost:3000/notes/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body: newNote.value })

    })
        .then(response => response.json())
        .then(recipe => {
            // here create a new DOM element to append to the recipeList using recipe.body (see line 20 and following)
            const displayRecipeCardEl = document.createElement("div")
            displayRecipeCardEl.className = "displayCardInfo"
            displayRecipeCardEl.innerHTML = '<p>' + recipe.body + '</p>'
            recipeList.appendChild(displayRecipeCardEl)
        })
        
})

//create a DOM element
