// Elementos del DOM //
const listaPokemones = document.querySelector(".all-pokemons") 
const buttons = document.querySelectorAll(".btn-header")
// Api que utilizaré //
const url = "https://pokeapi.co/api/v2/pokemon/"
// Bucle FOR el cual recorrerá los 151 pokemón que contiene la API //
for(let i = 1; i <= 151; i++){
    fetch(url + i)
    .then((response) => response.json())
    .then(data => mostrarPokemons(data))
}
function mostrarPokemons(data){ // Creo una función la cual llamaré en el bucle para crear las cards de los pokemon //

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

        // Creo un objeto que contiene la descripción de cada tipo de pokemón (este será llamado en el sweetAlert)
        const descripcionTipos = {
            normal: "Pokémon de tipo Normal, conocidos por su comportamiento y características estándar.",
            fire: "Pokémon de tipo Fuego, conocidos por su pasión y energía ardiente.",
            water: "Pokémon de tipo Agua, expertos en adaptarse a diferentes entornos acuáticos.",
            grass: "Pokémon de tipo Planta, conocidos por su naturaleza y habilidades en la naturaleza.",
            electric: "Pokémon de tipo Eléctrico, cargados de energía eléctrica y potentes ataques relámpago.",
            ice: "Pokémon de tipo Hielo, maestros del frío que pueden congelar a sus oponentes.",
            fighting: "Pokémon de tipo Lucha, expertos en combate cuerpo a cuerpo y técnicas marciales.",
            poison: "Pokémon de tipo Veneno, capaces de usar toxinas y venenos para debilitar a sus oponentes.",
            ground: "Pokémon de tipo Tierra, conectados con la tierra y capaces de manipular terrenos.",
            flying: "Pokémon de tipo Volador, dominadores del cielo y expertos en ataques aéreos.",
            psychic: "Pokémon de tipo Psíquico, dotados de habilidades mentales y poderes psíquicos.",
            bug: "Pokémon de tipo Bicho, expertos en tácticas de enjambre y habilidades relacionadas con insectos.",
            rock: "Pokémon de tipo Roca, resistentes y fuertes, con habilidades basadas en minerales.",
            ghost: "Pokémon de tipo Fantasma, misteriosos y espirituales, con poderes relacionados con lo paranormal.",
            dark: "Pokémon de tipo Siniestro, maestros de la oscuridad y capaces de tácticas desleales.",
            dragon: "Pokémon de tipo Dragón, criaturas poderosas y majestuosas con habilidades impresionantes.",
            steel: "Pokémon de tipo Acero, resistentes y duraderos, con defensas fuertes y ataques precisos.",
            fairy: "Pokémon de tipo Hada, seres mágicos y encantadores, con habilidades curativas y encantamientos.",
        };
        
        // Para agregarles a cada button un evento utilizo un forEach //
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
                        
                        const descripcionTipo = descripcionTipos[idButton] || "Descripción no disponible";
                        Swal.fire({
                            title: 'POKEMÓN TIPO: '+ idButton.toUpperCase(),
                            text: descripcionTipo,
                            imageUrl: 'https://www.teameevee.com/wp-content/uploads/2022/04/pokemon-dormidos-y-relajados.jpg.webp',
                            imageWidth: 400,
                            imageHeight: 200,
                            imageAlt: idButton,
                          })
                    }
                    }
                })
            }
        }))


