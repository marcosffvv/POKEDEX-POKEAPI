const alerta = () => {
    swal({
        title: 'INFORMACIÓN DE LA PÁGINA',
        text: 'HOLA SOY LA POKEBOLA DE LA POKEDEX. ESTA ES UNA VERSIÓN BETA POR LO QUE NO ESTÁ ACABADA NI MUCHO MENOS. PROXIMAMENTE HABRÁ BATALLAS ENTRE POKEMONS Y UN PEQUEÑO JUEGO DONDE TENDRÁS QUE ADIVINAR EL POKEMON POR LA SILUETA'
    });
}

const pokebola$$ = document.querySelector('.caja__ayuda');
pokebola$$.addEventListener('click', alerta);

//creamos un array donde se vayan metiendo todos nuestros pokemons

let arrayOfPokemons = [];

//creamos una función donde llamamos a la api, convertimos la respuesta de la promesa en json y la metemos en nuestro array de los pokemons

const getPokemon = async (name) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const responseJson = await response.json();
        console.log(responseJson); //probar a ejecutar la pokedex sin esto !!!!!!!!!!!!
        arrayOfPokemons = [...arrayOfPokemons, responseJson];
};

//creamos una variable para recorrer todos los pokemos y una función que llame a la función getPokemon 

let pokeList = 1;

const init = async () => {

    for (let i = pokeList; i < pokeList + 150; i++) {
        await getPokemon(i); //metemos la pokelist en el array
        
    }
    // console.log(arrayOfPokemons);

    //probar a ejecutar la pokedex sin esto !!!!!!!!!!!!

//creamos un bucle para que por cada pokemon, nos cree un div que vamos a meter dentro del div padre con clase caja_pokemon, y que va a tener los end points que le señalemos.
    
    for (const pokemon of arrayOfPokemons){
        const divPadre$$ = document.querySelector(".caja__pokemon");
        const pokemon$$ = document.createElement("div");
        pokemon$$.innerHTML = `
            <h4>${pokemon.name}</h4>
            <img src="${pokemon.sprites.front_default}" />
            <h3><strong>${'#' + pokemon.id}</strong></h3>
            <p>${'type pokemon: ' + pokemon.types[0].type.name}</p>
            <p>${'main attack: ' + pokemon.abilities[0].ability.name}</p>
            
            `;
        divPadre$$.appendChild(pokemon$$);
    };
};


// para cambiar de color el fondo de pantalla cada vez que se hace click en el boton de ajustes arriba a la izquierda

const setButon = document.querySelector(".caja__ajustes");
const caja$$ = document.querySelector(".caja");
const randomColor = () => {
    Math.floor(Math.random()*16777215).toString(16)
    return (Math.floor(Math.random()*16777215).toString(16));
}
const changeBackground = () => {
    caja$$.style.backgroundColor = '#' + randomColor();
};
setButon.addEventListener('click', changeBackground);

// buscador para filtrar los pokemons por nombre y tipo

// const buscarPokemon = () => {
//     const buscador$$ = document.querySelector(".            caja__buscador");
//     buscador$$.addEventListener('input', () =>
//     searchCharacters(buscador$$.value, arrayOfPokemons)
//     );
// }

init();