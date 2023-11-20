const inSym = document.querySelector("#input-currency-symbol")
const outSym = document.querySelector("#output-currency-symbol")
const inVal = document.querySelector("#input-currency-value")
const outVal = document.querySelector("#output-currency-value")

function calculate() {
    const a = inSym.value 
    const b = outSym.value 
    
    fetch('https://v6.exchangerate-api.com/v6/1ffbc6d3f996f0ae39c0372e/latest/USD')
    .then(res => res.json())
    .then(data => {
        const rate = (data.conversion_rates[b] / data.conversion_rates[a]);
        outVal.value = (inVal.value * rate).toFixed(2)
    })
}

inSym.addEventListener("change", calculate)
outSym.addEventListener("change", calculate)
inVal.addEventListener("input", calculate)

const swap=document.querySelector('#swap')
swap.addEventListener("click",()=>{
    const temp=inSym.value
    inSym.value=outSym.value
    outSym.value=temp
    calculate()
})

calculate()
