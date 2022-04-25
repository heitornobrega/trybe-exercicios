const url = 'https://api.coincap.io/v2/assets/';
const config = {
    method: 'GET',
    header: {'Accept': 'application/json'}
}

async function fetchData() {
    const coins = await fetch(url, config)
        .then(response => response.json())
        .then(data => data.data)
    console.log(coins)
    const listCoins = coins.reduce((acc, moeda) => {
        acc +=
            `<li class="list-group-item">
            <img src=
            "https://assets.coincap.io/assets/icons/${moeda.symbol.toLowerCase()}@2x.png">
            ${moeda.name} (${moeda.symbol}): ${moeda.priceUsd}
            </li>`
        return acc;
    }, '')
    const ul = document.getElementById('coin-ul');
    ul.innerHTML = listCoins;
}
fetchData();


