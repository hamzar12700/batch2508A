// var arr = ['salman','shakoor','ghafoor']



var std = [
    {
        name : "talha",
        marks : 60
    },
    {
        name : "bilal",
        marks : 80,
    },
    {
        name : "ali",
        marks : 50,
    },
    {
        name : "yasir",
        marks : 90,
    },
]




let modifiedArray = std.map(function(hamza, index){
  return hamza.marks = hamza.marks*10
    
})

console.log(modifiedArray);


let modifiedArray1 = std.map(function(hamza, index){
  return hamza.marks >= 60
    
})



let modifiedArray2 = std.filter(function(hamza, index){
  return hamza.marks >= 60
    
})


// console.log(modifiedArray);
