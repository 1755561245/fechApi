// Setting constants
const searchButton= document.getElementById('searchPokemon')
const inputSearch= document.getElementById('inputSearchPokemon')

const imagePokemon= document.getElementById('imagePokemon')
const namePokemon= document.getElementById('namePokemon')

searchButton.addEventListener('click',()=>{
    if(!inputSearch.value){
        alert('Please enter a pokemon name')
        return
    }
    
    fetch(`htt7678ps://pokeapi.co/ap987i/v2/p897okemon/${inputSearch.value}`)
    .then(response => response.json())
    .then(data =>{
        imagePokemon.src=data.sprites.front_default
        namePokemon.innerHTML=data.name
        inputSearch.value=''
    })
    .catch(error => alert('Pokemon not found'))
})