async function mydisp() {

    let p = new Promise(function(myresolve, myreject) {
        setTimeout(() => {
            myresolve("Hello world");
        }, 3000);
        console.log("WLUG")
    });
    console.log(await p);


}
mydisp();

//example of async,await