// fetch("")



console.log("usman")
console.log("rafay")
console.log("api calling ... data kahin dosri country se arha ha ")
console.log("taha")
console.log("bilal")


let btn = document.querySelector("button")

console.log(btn);



btn.addEventListener("click",function () {
    
let search = document.querySelector("#searchCountry").value; 


console.log(search);


document.querySelector(".container").innerHTML = ""

fetch(`https://restcountries.com/v3.1/name/${search}`).then((bilal)=>{

    return bilal.json()


}).then((usman)=>{
    console.log(usman,"=====>> api data after json convert");
    
usman.forEach((items)=>{
    console.log(items);

console.log(items.borders[0]);


let div = document.createElement("div");
div.id = "box";

div.innerHTML=  `

<h1>
border : ${items.borders[0]}</h1>

capital : ${items.capital[0]}

<img src=${items.flags.png} />

`

document.querySelector(".container").appendChild(div)



    
})


}).catch()


})

// error handling   ----> try ,  catch