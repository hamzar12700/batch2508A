let std = [
    {
        firstName: "Muhammad",
        lastName: "Bilal",
        slot: "T-T-S",
        time: "9 to 11",
        hobbies: ['cricket', 'coding', 'football']
    },
    {
        firstName: "Muhammad",
        lastName: "Taha",
        slot: "T-T-S",
        time: "9 to 11",
        hobbies: ['cricket', 'coding', 'restling']
    },
    {
        firstName: "Muhammad",
        lastName: "Ali",
        slot: "T-T-S",
        time: "9 to 11",
        hobbies: ['cricket', 'coding', 'pubg']
    },
    {
        firstName: "Muhammad",
        lastName: "Hamza",
        slot: "T-T-S",
        time: "9 to 11",
        hobbies: ['cricket', 'coding']
    },
    {
        firstName: "Abdul",
        lastName: "Rafay",
        slot: "T-T-S",
        time: "9 to 11",
        hobbies: ['cricket', 'coding']
    }


] 


std.forEach(function(elem , index){
var div = document.createElement("div")
div.classList.add("box1");
div.id= "box" 

div.innerHTML = `
${elem.firstName}
${elem.lastName}
${elem.slot}

`
console.log(div)

var container = document.querySelector(".container")

// console.log(container);


container.appendChild(div)



})



var name = "usman"

console.log(name)



// document.writeln("hello world")





// Array



// for(var i=0 ; i < std.length ; i++){
//     document.writeln("FirstName:",std[i].firstName);
//     document.write('</br>')
//     document.writeln("LastName:",std[i].lastName);
//     document.write('</br>')
    
// }

// console.log(std)