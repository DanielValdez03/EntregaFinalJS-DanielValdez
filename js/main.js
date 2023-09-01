const listaPokemones = document.querySelector(".all-pokemons")
const url = "https://pokeapi.co/api/v2/pokemon/"
const buttons = document.querySelectorAll(".btn-header")

for(let i = 1; i <= 151; i++){
    fetch(url + i)
    .then((response) => response.json())
    .then(data => mostrarPokemons(data))
}
function mostrarPokemons(data){

    let tiposPokemon = data.types.map((type) => `<p class="${type.type.name} type">${type.type.name}</p>`)
    tiposPokemon = tiposPokemon.join("")
    let div = document.createElement("div")
    let pokeId = data.id.toString();

    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }

    div.classList.add("card-pokemon")
    div.innerHTML = `<p class="pokemon-id-back">#${data.id}</p>
    <div class="image-pokemon">
        <img src="${data.sprites.other["official-artwork"].front_default}" alt="Pikachu">
    </div>
    <div class="info-pokemon">
        <div class="name-container">
            <p class="pokemon-id">#${pokeId}</p>
            <p class="pokemon-name">${data.name}</p>
        </div>
        <div class="pokemon-type">
            ${tiposPokemon}
        </div>
        <div class="stats-pokemon">
            <p class="stat">${data.height}MTS</p>
            <p class="stat">${data.weight}KG</p>
        </div>`;
        listaPokemones.append(div);}
       
        buttons.forEach((button) => button.addEventListener("click", (event) => {
            const idButton = event.currentTarget.id

            listaPokemones.innerHTML = ""

            for(let i = 1; i <= 151; i++){
                fetch(url + i)
                .then((response) => response.json())
                .then(data => {
                    if(idButton === "ver-todos"){
                        mostrarPokemons(data)
                    }else{
                    const pokemonTypes = data.types.map(type => type.type.name)
                    if(pokemonTypes.some((type)=> type.includes(idButton))){
                        mostrarPokemons(data)
                    }
                    }
                })
            }
        }))


