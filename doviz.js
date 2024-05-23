class Currency{
    constructor(){
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=DwubsVWBQzrAI1rY529XjbZy1rny84BA3XaIujP0&base_currency=";
    }

    async metod(amount,firstcurrency,secondcurrency){
        const response=await fetch(`${this.url} ${firstcurrency}`);
        const result=await response.json();
        //console.log(result)
        console.log(result.data[secondcurrency])
        //console.log(amount)
        const gelendeger=result.data[secondcurrency];
        console.log(typeof gelendeger)
        const exchangeresult=amount * gelendeger
        console.log(exchangeresult)
        return exchangeresult;
    };

}

/*class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=DwubsVWBQzrAI1rY529XjbZy1rny84BA3XaIujP0&base_currency=";
    }

  async  metod(amount , firstCurrency , secondCurrency){
    const response =    await fetch(`${this.url}${firstCurrency}`);
    const result = await response.json();
    const exchangedResult = amount * result.data[secondCurrency];

    return exchangedResult;
    }
}*/