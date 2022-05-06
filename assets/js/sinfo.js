async function fetchinfo() {
    let id = window.location.search.substr(1);

    let response = await fetch(`https://superheroapi.com/api.php/3071624346492008/${id}`);
    let sh = await response.json();
    console.log(sh);

    let shBox = document.getElementById('display-superhero');

    shBox.innerHTML = `
            <div id="superhero-box">
                <div id="superhero-image">
                    <img src="${sh.image.url}" alt="superhero image">
                </div>
                <div>
                    Id : ${sh.id}
                    <br>
                    Name : ${sh.name}
                    <br>
                    Power Stats : 
                    <br>
                        &emsp; Intelligence: ${sh.powerstats.intelligence}
                        <br>
                        &emsp; Strength: ${sh.powerstats.strength}
                        <br>
                        &emsp; Speed: ${sh.powerstats.speed}
                        <br>
                        &emsp; Durability: ${sh.powerstats.durability}
                        <br>
                        &emsp; Power: ${sh.powerstats.power}
                        <br>
                        &emsp; Combat: ${sh.powerstats.combat}
                        <br>
                    Publisher : ${sh.publisher}
                    <br>
                    Gender : ${sh.appearance.gender}
                    <br>
                    Height : ${sh.appearance.height}
                    <br>
                    Weight : ${sh.appearance.weight}
                    <br>

                    <span id="${sh.id}"><span onclick="removeFav(${sh.id})" ><i class="fa-solid fa-heart-circle-xmark"></i></span> </span>
                </div>
            </div>
        
        `
}


fetchinfo();