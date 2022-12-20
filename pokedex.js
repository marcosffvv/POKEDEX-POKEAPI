const alerta = () => {
    alert('HOLA SOY LA POKEBOLA Y NO HAGO ABSOLUTAMENTE NADA');
}
const pokebola$$ = document.querySelector('.caja__ayuda');
pokebola$$.addEventListener('click', alerta);

//creamos un array donde se vayan metiendo todos nuestros pokemons
let arrayOfPokemons = [];

//creamos una función donde llamamos a la api, convertimos la respuesta de la promesa en json y la metemos en nuestro array de los pokemons
const getPokemon = async (name) => {
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const responseJson = await response.json();
        console.log(responseJson); //probar a ejecutar la pokedex sin esto !!!!!!!!!!!!
        arrayOfPokemons = [...arrayOfPokemons, responseJson];
    }
    catch (error){
    console.log(error);
    }
};

//creamos una función que llame a la función getPokemon
const init = async () => {
    try {
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);
        await getPokemon(6);

        console.log(arrayOfPokemons);
        //probar a ejecutar la pokedex sin esto !!!!!!!!!!!!

//creamos un bucle para que por cada pokemon, nos cree un div que vamos a meter dentro del div padre con clase caja_pokemon, y que va a tener los end points que le señalemos.
    
    for (const pokemon of arrayOfPokemons) {
        const divPadre$$ = document.querySelector(".caja__pokemon");
        const pokemon$$ = document.createElement("div");
        pokemon$$.innerHTML = `
            <h4>${pokemon.name}</h4>
            <img src="${pokemon.sprites.front_default}" />
            <h3><strong>${'#' + pokemon.id}</strong></h3>
            <p>${'type: ' + pokemon.types[0].type.name}</p>
            <p>${'attack nº1: ' + pokemon.abilities[0].ability.name}</p>
            <p>${'attack nº2: ' +pokemon.abilities[1].ability.name}</p>
            `;
        divPadre$$.appendChild(pokemon$$);
    }
    } catch (error) {
        console.log(error);
    }
};

init();
