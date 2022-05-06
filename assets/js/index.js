document.addEventListener('keyup', fetchHero);

function addFav(superHeroID){
    localStorage.setItem(superHeroID, superHeroID);
    console.log("added to fav : " +  localStorage.getItem(superHeroID));
    let likeButton = document.getElementById(superHeroID);
    likeButton.innerHTML = `<span onclick="removeFav(${superHeroID})" id="${superHeroID}"><i class="fa-solid fa-heart-circle-xmark"></i></span>`
}


function removeFav(superHeroID){
    localStorage.removeItem(superHeroID);
    console.log("removed from fav : " +  localStorage.getItem(superHeroID));
    let likeButton = document.getElementById(superHeroID);
    likeButton.innerHTML = `<span onclick="addFav(${superHeroID})" id="${superHeroID}"><i class="fa-solid fa-heart-circle-check"></i></span>`

}

async function fetchHero() {
    let name = document.getElementById('search-input').value;
    let response = await fetch(`https://superheroapi.com/api.php/3071624346492008/search/${name}`);
    let resJson = await response.json();
    let superHero = resJson.results;
    console.log(superHero);
    let superHeroList = document.getElementById('display-superhero');

    if (superHeroList.childElementCount != 0) {
        let childs = superHeroList.childElementCount;
        for (let j = 0; j < childs; j++) {
            superHeroList.children[0].remove();
        }
    }

    for (let sh of superHero) {

        if(localStorage.getItem(sh.id)){
            superHeroList.innerHTML =
            `<div id="superhero-box">
                <div id="superhero-image">
                    <a href="/sinfo.html?${sh.id}" target="_blank">
                        <img src="${sh.image.url}" alt="superhero image">
                    </a>
                </div>
                <div>
                    <a href="/sinfo.html?${sh.id}" target="_blank">

                        Name : ${sh.name}
                        <br>
                        Gender : ${sh.appearance.gender}
                        <br>
                        Height : ${sh.appearance.height}
                        <br>
                        Weight : ${sh.appearance.weight}
                        <br>
                    </a>
                    <span id="${sh.id}"><span onclick="removeFav(${sh.id})" ><i class="fa-solid fa-heart-circle-xmark"></i></span> </span>
                    <span> <a href="/sinfo.html?${sh.id}" target="_blank"><i class="fa-solid fa-circle-info"></i></a> </span>
                    </div>
            </div>` + superHeroList.innerHTML

        } else {
            superHeroList.innerHTML =
            `<div id="superhero-box">
                <div id="superhero-image">
                    <a href="/sinfo.html?${sh.id}" target="_blank">
                        <img src="${sh.image.url}" alt="superhero image">
                    </a>
                </div>
                <div>
                    <a href="/sinfo.html?${sh.id}" target="_blank">
                        Name : ${sh.name}
                        <br>
                        Gender : ${sh.appearance.gender}
                        <br>
                        Height : ${sh.appearance.height}
                        <br>
                        Weight : ${sh.appearance.weight}
                        <br>
                    </a>
                    <span id="${sh.id}"><span onclick="addFav(${sh.id})"><i class="fa-solid fa-heart-circle-check"></i></span> </span>
                    <span> <a href="/sinfo.html?${sh.id}" target="_blank"><i class="fa-solid fa-circle-info"></i></a> </span>
                    </div>
            </div>` + superHeroList.innerHTML
        }
    }
}


