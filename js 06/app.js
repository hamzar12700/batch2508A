function iftarParty(){
return new Promise((resolve, reject) => {

    let success = true;
    setTimeout(() => {

        if (success) {
            resolve("ali iftar krne aa rha haaa.......")
        } else {
            reject("czn ki barsi ha abu mana kr rhe hain me nahi aa skta !! topi")
        }
    },5000)
})
}

iftarParty().then((msg) => {
    console.log(msg);

}).catch((err) => {
    console.log(err)
})





