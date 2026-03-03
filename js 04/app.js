// console.log("file is connected.........")



var foodItem = [
    {
    title : "halwa pori",
    price : "40 Rs",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXfTDfQlReU-ZykSRojeoMpmvlocTqNagFjg&s",
    category: "breakfast"
},
    {
    title : "nihari",
    price : "500 Rs",
    img : "",
    category : "lunch"
},
    {
    title : "beef biryani",
    price : "300 Rs",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMCbF0UG-18HEkkwg3j-0jBbkjbQ7uKr59Lw&s",
    category : "dinner"
},
    {
    title : "haleem",
    price : "100 Rs",
    img : "",
    category : "dinner"
},
    {
    title : "anda paratha",
    price : "60 Rs",
    img : "",
    category : "breakfast"
},
    {
    title : "daal chawal",
    price : "130 Rs",
    img : "",
    category: "lunch"
},

]


// console.log(foodItem)

var foodList = document.querySelector(".foodList");


console.log(foodList);

var name = "talha"
function displayCards (aptech){ // parameter


foodList.innerHTML=``

aptech.forEach((elem)=>{

    // console.log(elem.title);
    
  let div = document.createElement("div");
  div.id = "cards",
  div.innerHTML= `<img src=${elem.img} />  <h1>${elem.title}</h1> <h2>Price :${elem.price}</h2>`  
foodList.appendChild(div)
})

}



function filteredCards(category){
    // console.log("talha bhai soo nahi parhai krlo kam aye gyi.....",category);


    if (category === "all") {
        displayCards(foodItem)
    }else{
        const filtered = foodItem.filter((items)=> items.category ===  category);
        displayCards(filtered)
    }
    
}





displayCards(foodItem) /// argument