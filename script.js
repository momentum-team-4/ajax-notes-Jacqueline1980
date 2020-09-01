
const newNote = document.querySelector("#recipeCard") //text area
const newRecipe = document.querySelector(".newRecipe") //button
const noteForm = document.querySelector("#notes-area") //form
const deleteRecipe = document.querySelector(".deleteRecipe") //button


//const newRecipe = document.getElementById("#newRecipe") 

window.addEventListener('load', function () {
    fetch('http://localhost:3000/notes/')
        .then(response => response.json())
        //when the page loads, get a new 'recipe card to type on'
        .then(recipeCard => {
            console.log(recipeCard)
            const recipeCardEls = createNote.map(newNote => createRecipeCardEl(newNote))
            console.log(recipeCardEls)

            //not sure I need this part yet
            // for (const newNoteEl of recipeCardsEls){
            //     a
            // }

        })
    function createRecipeCardEl(newNote) {
        const newNoteEl = document.createElement('div');
        newNoteEl.id = recipeCard

        const noteCardEl = document.createElement('card')
        div.textContent = recipeCard
        newNoteEl.appendChild(card)

        //note sure if below is necessary
        //const bodyEl = document.createElement('writing');
        // div.textContent = newNote
        // newNoteEl.appendChild(writing)
//         div = document.createElement('div')
//         const deleteButton = document.createElement('button')
//         deleteButton.classList.add
//         deleteButton.textContent = 'Delete Recipe'

//         deleteButton.addEventListener('click', function () {
//             deleteRecipeEntry(recipeId)
//         }

// function deleteRecipeEntry(recipeId) {
//                 fetch('http://localhost:3000/notes/' + recipeId, {
//                     method: 'DELETE'
//                 })
//                     .then(res => {
//                         if (res.status === 200) {
//                             const recipeCardEl = document.querySelector(recipeId)
//                             recipeCardEl.remove()
//                         }
//                     })
//             }
            //not sure this function was correct 

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
            noteForm.addEventListener('submit', function (event) {
                event.preventDefault()
                fetch('http://localhost:3000/notes/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ body: newNote.value })

                })
            }

            )}})
