window.onload = () => {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('root').appendChild(table);

    data.exchangeRate.forEach(el => {
        const row = document.createElement('tr');
        const headingUA = document.createElement('th');
        headingUA.innerHTML = el.baseCurrency;
        const headingOne = document.createElement('th');
        headingOne.innerHTML = el.currency;
        const headingTwo = document.createElement('th');
        headingTwo.innerHTML = el.saleRateNB;
        const headingThree = document.createElement('th');
        headingThree.innerHTML = el.purchaseRateNB;

        row.appendChild(headingUA);
        row.appendChild(headingOne);
        row.appendChild(headingTwo);
        row.appendChild(headingThree);
        thead.appendChild(row);
    })
}

const data = {
    "date":"28.06.2022",
    "bank":"PB",
    "baseCurrency":980,
    "baseCurrencyLit":"UAH",
    "exchangeRate":[
        {"baseCurrency":"UAH","saleRateNB":20.2561000,"purchaseRateNB":20.2561000},
        {"baseCurrency":"UAH","currency":"AZN","saleRateNB":17.2483000,"purchaseRateNB":17.2483000},
        {"baseCurrency":"UAH","currency":"BYN","saleRateNB":10.6335000,"purchaseRateNB":10.6335000},
        {"baseCurrency":"UAH","currency":"CAD","saleRateNB":22.6756000,"purchaseRateNB":22.6756000},
        {"baseCurrency":"UAH","currency":"CHF","saleRateNB":30.4834000,"purchaseRateNB":30.4834000,"saleRate":37.1000000,"purchaseRate":34.1000000},
        {"baseCurrency":"UAH","currency":"CNY","saleRateNB":4.3728000,"purchaseRateNB":4.3728000},
        {"baseCurrency":"UAH","currency":"CZK","saleRateNB":1.2505000,"purchaseRateNB":1.2505000,"saleRate":1.5200000,"purchaseRate":1.4000000},
        {"baseCurrency":"UAH","currency":"DKK","saleRateNB":4.1549000,"purchaseRateNB":4.1549000},
        {"baseCurrency":"UAH","currency":"EUR","saleRateNB":30.9122000,"purchaseRateNB":30.9122000,"saleRate":37.8000000,"purchaseRate":36.8000000},
        {"baseCurrency":"UAH","currency":"GBP","saleRateNB":35.8680000,"purchaseRateNB":35.8680000,"saleRate":43.7000000,"purchaseRate":40.3000000},
        {"baseCurrency":"UAH","currency":"GEL","saleRateNB":9.8171000,"purchaseRateNB":9.8171000},
        {"baseCurrency":"UAH","currency":"HUF","saleRateNB":0.0767060,"purchaseRateNB":0.0767060},
        {"baseCurrency":"UAH","currency":"ILS","saleRateNB":8.6011000,"purchaseRateNB":8.6011000},
        {"baseCurrency":"UAH","currency":"JPY","saleRateNB":0.2160100,"purchaseRateNB":0.2160100},
        {"baseCurrency":"UAH","currency":"KZT","saleRateNB":0.0633590,"purchaseRateNB":0.0633590},
        {"baseCurrency":"UAH","currency":"MDL","saleRateNB":1.5225000,"purchaseRateNB":1.5225000},
        {"baseCurrency":"UAH","currency":"NOK","saleRateNB":2.9734000,"purchaseRateNB":2.9734000},
        {"baseCurrency":"UAH","currency":"PLN","saleRateNB":6.5746000,"purchaseRateNB":6.5746000,"saleRate":8.0000000,"purchaseRate":7.3500000},
        {"baseCurrency":"UAH","currency":"RUB","saleRateNB":0.5389800,"purchaseRateNB":0.5389800},
        {"baseCurrency":"UAH","currency":"SEK","saleRateNB":2.8976000,"purchaseRateNB":2.8976000},
        {"baseCurrency":"UAH","currency":"SGD","saleRateNB":21.1227000,"purchaseRateNB":21.1227000},
        {"baseCurrency":"UAH","currency":"TMT","saleRateNB":8.3585000,"purchaseRateNB":8.3585000},
        {"baseCurrency":"UAH","currency":"TRY","saleRateNB":1.7711000,"purchaseRateNB":1.7711000},
        {"baseCurrency":"UAH","currency":"UAH","saleRateNB":1.0000000,"purchaseRateNB":1.0000000},
        {"baseCurrency":"UAH","currency":"USD","saleRateNB":29.2549000,"purchaseRateNB":29.2549000,"saleRate":35.7500000,"purchaseRate":35.4000000},
        {"baseCurrency":"UAH","currency":"UZS","saleRateNB":0.0026630,"purchaseRateNB":0.0026630}
    ]}