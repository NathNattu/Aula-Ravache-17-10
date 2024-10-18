const pokemons = [
    { id :1,nome: 'Bulbassauro', tipo: 'vegetal,Veneno'
    },
    {id: 2, nome: 'squirtle', tipo: 'Água' },
    {
        id: 3, nome: 'Charmander', tipo: 'Fogo'
    },
];

const  getPokemons =() => pokemons;
const getPokemonsById = (id) => pokemons.find(p =>  p.id === parsetInt(id));
const createPokemon = (nome,tipo) => pokemons.push(pokemons.length+1, nome, tipo)

module.exports ={getPokemons, getPokemonById, createPokemon};