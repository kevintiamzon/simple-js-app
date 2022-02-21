let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: 'Bulbasaur',
            height: 7,
            types: ['grass', 'poison']
        },
        {
            name: 'Charizard',
            height: 8,
            types:['fire', 'flying']
        },
        {
            name: 'Jigglypuff',
            height: 1,
            types: ['normal', 'fairy']
        },
    ]
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    function getAll() {
        return pokemonList;
    }
    return {
        add: add,
        getAll: getAll
    };
})();

function myLoopFunction(pokemonList) {
    if (pokemonList.height <= 7) {
        document.write('<p>' + pokemonList.name + ' (height: ' + pokemonList.height + ') ' + '<p>');
    }
    else if (pokemonList.height > 7) {
        document.write('<p>' + pokemonList.name + ' (height: ' + pokemonList.height + ') ' + "Wow, what a big Pokemon! " + '<p>');
    }
}
pokemonRepository.getAll().forEach(myLoopFunction);