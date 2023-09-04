
const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

 
 
//slecetors
const main = document.querySelector(".main")
const search = document.querySelector("#search")
const moiveBox = document.querySelector("#movie-box");
 
// function 
 
async function getMovies(api) {
    let response = await fetch(api);
    let  data = await  response.json();
    showMovies(data.results)
}

function showMovies(data) {
    moiveBox.innerHTML = " " ;
    // empty the move box
    data.forEach( 
        (item) => {
            const Box =  document.createElement("div");
            Box.classList.add("box");
            Box.innerHTML =  `              
            <img src="${IMGPATH + item.poster_path}" alt="" />
            <div class="overlay">
            <div class="title"> 
            <h2> ${item.original_title}  </h2>
            <span> ${item.vote_average} <span>
            </div>
            <h3>Overview:</h3>
            <p> 
            ${item.overview}
            </p>
            </div> ` ;
            
            moiveBox.appendChild(Box) 
        }
        )
                
                
  }
 
  search.addEventListener("keydown",
  function (event) {

    if (event.target.value != " ") { 
        getMovies( SEARCHAPI + event.target.value);
    }
    else{
        getMovies(APIURL)
    }
 
  })
  getMovies(APIURL);
 
 