async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve("Hello World"); }, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

//example of promise async/await