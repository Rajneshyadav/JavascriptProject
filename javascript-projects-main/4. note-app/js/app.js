
const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")
// Button


addBtn.addEventListener(
    "click",
    function (event) {
         addNote()
  
    }
)

 
//Function of Saving Notes
const saveNotes = function () {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];

    notes.forEach(
        function (note) {
            data.push(note.value)
        })

    // Stroaing data in Local
    if (data.length === 0) {
        localStorage.removeItem("Notes")
    }
    else {
        localStorage.setItem("Notes", JSON.stringify(data))
        console.log(data);
    }
}


 
// Main Box Notes
const addNote = function (text = '') {
    const note = document.createElement("div");
    //Creating a Dynamic Note BOX
    note.classList.add("note")
    note.innerHTML = `
        <div class="tool">
        <i class="save fas fa-save">  Save</i>
        <i class="trash fas fa-trash">Delete</i>
    </div>
    <textarea>${text}</textarea>
     `;


    // Delete
    note.querySelector(".trash").addEventListener(
        "click",
        function () {
            note.remove()
            saveNotes();
        })
       
    // Save
    note.querySelector(".save").addEventListener(
        "click",
        function () {
            saveNotes()
        })

    // focus out save
    note.querySelector("textarea").addEventListener(
        "focusout",
        function () {
            saveNotes()
        }
    )
    main.appendChild(note);
};


// Self caling function
(
    function () {
        const lsNotes = JSON.parse(localStorage.getItem("Notes"));
        console.table(lsNotes)
        if (lsNotes === null) {

            addNote()
        }
        
        else {
            lsNotes.forEach(
                function (lsNotes) {
                    addNote(lsNotes)
                }
            )
        }

    }
)()
