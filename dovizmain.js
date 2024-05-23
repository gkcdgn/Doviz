const amountinput=document.querySelector("#amount");
const firstoption=document.querySelector("#firstCurrencyOption");
const secondoption=document.querySelector("#secondCurrencyOption");
const resultelement=document.querySelector("#result");
//console.log(amountinput)
/*console.log(firstoption)
console.log(secondoption)
console.log(resultelement)*/


const curreyn=new Currency();
runEventlisteners();


function runEventlisteners(){
    amountinput.addEventListener("input",exchange);
}

function exchange(){
    const amount=Number(amountinput.value.trim());
    //console.log(typeof amount)
    const firstoptionvalue = firstoption.options[firstoption.selectedIndex].textContent;
    const secondoptionvalue = secondoption.options[secondoption.selectedIndex].textContent;
    //console.log(firstoptionvalue,secondoptionvalue)
   // console.log(amount)


 curreyn.metod(amount,firstoptionvalue,secondoptionvalue)
    .then((result) => {
        resultelement.value=result
        console.log(resultelement.value)
    })

    
}


