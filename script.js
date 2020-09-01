
const newNote = document.querySelector("#recipeCard") //text area
const newRecipe = document.querySelector(".newRecipe") //button
const noteForm = document.querySelector("#notes-area") //form
const deleteRecipe = document.querySelector(".deleteRecipe") //button


//const newRecipe = document.getElementById("#newRecipe") 

window.addEventListener('load', function(){
    fetch('http://localhost:3000/notes/')
    .then(response => response.json())
    //when the page loads, get a new 'recipe card to type on'
    .then(recipeCard => {
    console.log(recipeCard)
    const recipeCardEls = createNote.map(newNote => createRecipeCardEl(newNote))
    console.log(recipeCardEls)
   

})
function createRecipeCardEl(newNote){
    const newNoteEl = document.createElement('div');
    newNoteEl.id = recipeCard

    const noteCardEl = document.createElement('div')
    div.textContent = recipeCard
    newNoteEl.appendChild(div)

    const bodyEl = document.createElement('div');
    div.textContent = newNote
    newNoteEl.appendChild(div)

}
//not sure this function is correct 

//  function createNote(recipeCard){
    
//     for (let i = 0; i < data.length; i++){
     
//         const newnoteEl = document.createElement('div');
//         const notecardEl = document.createElement('card');
//         const bodyEl = document.createElement('writing');
//         notecardEl.innerHTML = data[i].card;
//         bodyEl.innerHTML = data[i].writing;
//         newnoteEl.appendChild(notecardEl);
//         bodyEl.appendChild(notecardEl);
//         console.log(newNote)
    
// }

//event listener//
//saving the mood
noteForm.addEventListener('submit', function(event){
    event.preventDefault()
    fetch('http://localhost:3000/notes/',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body: newNote.value})

    })}

)})
