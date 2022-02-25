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

    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
            console.log(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
    }
    
    function showDetails(pokemon){
        pokemonRepository.loadDetails(pokemon).then(function () {
        showModal(pokemon.name, pokemon.height, pokemon.imageUrl);
        });
    }

    function showModal(name, height, imageUrl){
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.innerHTML = '';
        let modal = document.createElement('div');
        modal.classList.add('modal');
        
        // create a Close button for modal

        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        // create title element for modal

        let titleElement = document.createElement('h1');
        titleElement.innerText = name;

        // Show height in modal

        let heightElement = document.createElement('p');
        heightElement.innerText = "Height: " + height;

        // Show image of pokemon in modal

        let imageElement = document.createElement('img');
        imageElement.src = imageUrl;

        // append elements to Parent element
        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(heightElement);
        modal.appendChild(imageElement);
        modalContainer.appendChild(modal);
        modalContainer.classList.add('is-visible');
    }

    function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');
      
        // allows esc. key to exit modal
        window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
          }
        });

         // allows click out of modal to exit modal
        modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer){
        hideModal();
          }
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

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListitem(pokemon);
    });
});