const url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json"

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("button");

// for (code in countryList){
//     console.log(code,countryList[code]);
// } 


for(let select of dropdowns)
{
    for (currCode in countryList)
    {
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from" && currCode==="USD")
        newOption.selected="selected";
        else if((select.name==="to" && currCode==="INR"))
            newOption.selected="selected";

        select.append(newOption);

    }


select.addEventListener('change',(e)=>{
    updateFlag(e.target);
})
}

const updateFlag=(element)=>{
  let currCode=element.value;
  let countryCode=countryList[currCode];
  let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png` 
  let img= element.parentElement.querySelector("img");
  img.src=newSrc;
//   console.log(currCode)
}

btn.addEventListener("click",async (e)=>{
    e.preventDefault();
    let amount=document.querySelector(".amount input")
    let amtVal=amount.value;
    if(amtVal ===""|| amtVal < 1){
        amtVal=1;
        amount.value="1";
    }
    const url_2=`url/${fromCurr.value.toLowerCase()}/${toCurr.value.tolowerCase()}.json`;

    let response=await fetch(url_2);
    let data =await response.json();
    let rate=data[toCurr.value.toLowerCase()];
    console.log(rate);
    console.log(data);
    console.log(amount);


    let finalAmount=amtVal*rate;
    msg.innerText=`${amtval} ${fromCurr.value}=${finalAmount} ${toCurr.value}`
})
