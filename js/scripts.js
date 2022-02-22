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

    function showDetails(pokemon){
        console.log(pokemon);
    }

    function addListitem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', function(showDetails) {
            console.log(pokemon);
        })
    }
    
    return {
        add: add,
        getAll: getAll,
        addListitem: addListitem
    };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Pikachu', height: 0.3, types: ['electric'] });


pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListitem(pokemon);
});