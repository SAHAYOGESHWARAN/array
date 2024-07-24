const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello saha ");
    }, 2000);
});

myPromise.then(value => console.log(value)); 



// output 

// "Hello" after 2 seconds
