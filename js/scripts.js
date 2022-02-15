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
    }
];

for (let i=0; i < pokemonList.length; i++) {
    if (pokemonList[i].height <= 7) {
        document.write(pokemonList[i].name + '(height: ' + pokemonList[i].height + ')')
    }
    else if (pokemonList[i].height > 7) {
        document.write(pokemonList[i].name + '(height: ' + pokemonList[i].height + ')' + "Wow, what a big Pokemon!")
    }
}