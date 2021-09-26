let p = new Promise(function(resolve, rejected) {

    let task = 1 + 1 + 1;
    if (task == 2) {
        resolve("Your answer is correct!!");
    } else {
        rejected("Your answer is wrong!!");
    }
});
//producing code

p.then(function(msg) {
    console.log(msg + "in then block");
}).catch(function(msg) {
    console.log(msg + " in catch block")
})

//consuming code

//example used while explaining how to create and use promise