
const newNote = document.querySelector("#recipe")
const newRecipe = document.querySelector("#newRecipe")
const notesArea = document.querySelector("#notes-area")

//event listener//
window.addEventListener('load', function(){
    getPage()
    fetch('http://localhost:3000/notes/')
    .then(res => res.json())
    .then(createNote => {
        console.log(createNote)
        const noteEl = createNote.map(newNote => createNoteEl(newNote))
        console.log(noteEl)
    })
})
