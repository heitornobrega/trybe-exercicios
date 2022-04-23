// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';


const fetchJoke = () => {
    const reqObj = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };
    fetch(API_URL, reqObj)
        .then(value => value.json())
        .then(dados => dados.joke)
        .then(valor => document
            .getElementById('jokeContainer').innerText = valor)
    
};
window.onload = () =>  fetchJoke();
