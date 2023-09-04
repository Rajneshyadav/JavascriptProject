const APIURL = "https://api.github.com/users/";
const searchBox = document.querySelector("#search")
const main = document.querySelector("#main");
 
 async function getUser(username) {
             
    let response = await fetch(APIURL + username)
    let data  = await response.json()

    const card = ` <div class="card">
    <div>
    <div>
    <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
</div>
<div class="user-info">
    <h2>${data.name}</h2>
    <p>${data.bio}</p>

    <ul class="info">
        <li>${data.followers}<strong>Followers</strong></li>
        <li>${data.following}<strong>Following</strong></li>
        <li>${data.public_repos}<strong>Repos</strong></li>
    </ul>

    <div id="repos">
      
    </div>
</div>

        <div id="repos">
            <a class="repo" href="#" target="_blank">Repo 1</a>
            <a class="repo" href="#" target="_blank">Repo 2</a>
            <a class="repo" href="#" target="_blank">Repo 3</a>
        </div>
        
    </div>
</div>  `

main.innerHTML = card;
 getRepos(username)
 }

// Function 2 

async function getRepos(username) {
    const repos = document.querySelector("#repos")
    const response = await fetch(APIURL + username + "/repos")
    const data = await response.json();
     data.forEach(item  => {
          const elem = document.createElement("a")
          elem.classList.add("repo")
          elem.href = item.html_url
          elem.innerText = item.name
          elem.target = "_blank"
          repos.appendChild(elem)
     });

}
 
 
getUser("bhagirath-wscubetech");

const formSubmit = () => {
    if (searchBox.value != "") {
        getUser(searchBox.value);
        searchBox.value = ""
    }
    return false;
}


searchBox.addEventListener(
        "focusout",
        function() {
            formSubmit()
        }
    )
 