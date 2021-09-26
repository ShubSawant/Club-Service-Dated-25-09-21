let p = new Promise(function(resolve, reject) {
    console.log("BEFORE SETTIMEOUT");
    setTimeout(function() { resolve("HELLO WORLD AFTER 5 SECONDS") }, 5000);
    console.log("AFTER SETTIMEOUT");
});




//Producing code

p.then(function(msg) {
    console.log(msg + " then block");
}).catch(function(msg) {
    console.log(msg + " catch block");
});