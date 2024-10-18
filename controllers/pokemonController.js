const pokeModel = require('. ./models/pokeModel');

const getAllPokemons = (req,res) => {
    const pokemons = pokeModel.getPokemons();
    res.require('Index',{ pokemons});

};

const getPokemon = (req, res) =>{
    const pokemon = pokeModel.getPokemonById(req.params.id);
    if(pokemon){
        res.render('pokemon', {pokemon});
    } else {
        res.status(404).send('pokemon não encontrado');
    }
}