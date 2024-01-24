const container = document.getElementById('container')


fetch('https://pokeapi.co/api/v2/pokemon')
.then ((response) => response.json())
.then ((response) => listaPokemon(response))



function listaPokemon(pokemons) {

    pokemons.results.map((pokemon, index) => {
    const card = document.createElement('div')
    const cardImage = document.getElementById(pokemon.name)

    card.className = 'card'
    card.id = index + 1

    card.innerHTML = ` 
    <p class="card_title">${pokemon.name}</p>
    <button class="card_botao" onClick="mostrarInfoPokemon('${pokemon.url}')">Mais Informações</button>
    `

    container.append(card)
})

}

function mostrarInfoPokemon(url) {
    fetch(url)
    .then((response) => response.json ())
    .then((response) => InfoPokemon (response))
}

function InfoPokemon(response) {
    const card = document.getElementById(response.id)
    const pokemonImage = document.getElementById(response.name)
    const imagem = document.createElement('img')

    if (!pokemonImage) {
    imagem.className = 'card__image'
    imagem.id = response.name
    imagem.src = response.sprites.front_default
    } else {
        return
    } 



    card.append(imagem)
}