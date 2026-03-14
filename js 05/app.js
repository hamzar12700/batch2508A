// console.log("poyo oil")



// // setTimeout(function(){
// // console.log("bhai samosay tyar hain ???")
// // },5000)


// let time1 = setInterval(()=>{
//     console.log("nafsiyatigiri nahi kryoooo bata rha ho haaaaaaaaaaaaaaa...")
// },1000)



// clearInterval(time1 , 10000)


// // clearInterval( time1 , 100000 )


// console.log("abusing nai marr bata rha ho haaaaaaaaaaaaaaaaaaaaaaaaaaaa.")



const myInterval = setInterval(setColor, 500);

function setColor() {
  let x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}

function stopColor() {
  clearInterval(myInterval);
}


stopColor()