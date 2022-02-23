let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function addListitem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', function(event) {
            showDetails(pokemon);
        })
    }

    async function loadList() {
        try {
            const response = await fetch(apiUrl);
            const json = await response.json();
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        } catch (e) {
            console.error(e);
        }
    }

    async function loadDetails(item) {
        let url = item.detailsUrl;
        try {
            const response = await fetch(url);
            const details = await response.json();
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        } catch (e) {
            console.error(e);
        }
    }
    
    function showDetails(item){
        pokemonRepository.loadDetails(item).then(function () {
            console.log(item);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListitem: addListitem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Pikachu', height: 0.3, types: ['electric'] });

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListitem(pokemon);
    });
});