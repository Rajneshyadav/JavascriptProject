
const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")


 

 item.addEventListener("keyup" ,
   function name(event) {
      if (event.key == "Enter") {
        console.log(this.value)
        addToDo(this.value);
        this.value = " ";

      }
      
})


  function addToDo(value) { 
    let listItem = document.createElement("li");
    listItem.innerHTML = ` ${value}  
    <i class="fas fa-times"></i> `  
      
    listItem.addEventListener("click", 
    function ( ) {
         this.classList.toggle("done");
    })

    listItem.querySelector("i").addEventListener( "click",
    function  ( ) {
        listItem.remove()
    })
    toDoBox.appendChild(listItem);
  }
 