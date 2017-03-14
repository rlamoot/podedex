var ToonFoto = function (e) {
    e.preventDefault();
    var ToonPokemon = $('#search').val();
    var ToonFotoPokemon = "https://img.pokemondb.net/artwork/" + ToonPokemon;

    $('#picture').load(ToonFotoPokemon);

};





$(document).ready(function(){
    $('#submit').on('click', ToonFoto);
};