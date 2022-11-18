const wallet = {
    name: 'Олег',
    btc: {
        name: 'Bitcoin',
        logo: '<img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png">',
        rate: '29380.76',
        coin: '50'
    },
    eth: {
        name: 'Ethereum',
        logo: '<img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png">',
        rate: '1727.72',
        coin: '25'
    },
    xml: {
        name: 'Stellar',
        logo: '<img src="https://s2.coinmarketcap.com/static/img/coins/64x64/512.png">',
        rate: '01346',
        coin: '10'
    },
    show: function (nameCoin) {
        document.getElementById("wallet-info").innerHTML=`Доброго дня, 
        ${wallet.name}! На вашому рахунку 
        ${wallet[nameCoin].name} 
        ${wallet[nameCoin].logo} залишилось 
        ${wallet[nameCoin].coin}, якщо ви сьогодні продасте їх, то отримаєте 
        ${(wallet[nameCoin].rate*wallet[nameCoin].coin*31).toFixed(2)} грн`
    }
}

wallet.show(prompt('Введіть назву монети:', 'btc, eth, xml'));