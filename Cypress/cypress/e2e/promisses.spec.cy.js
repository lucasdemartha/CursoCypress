it('sem testes ainda', () => {})

// const getSomething = (callback) => {
//     setTimeout(() => {
//         callback(12);
//     }, 1000)
// }

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13);
        }, 1000)
    })
}

const system = async () => {
    console.log('init');
    //const some = await getSomething();
    //console.log(`Something is ${some}`);
    getSomething().then(some => {
        console.log(`Something is ${some}`);
    });
    //console.log("Something is " + some");
    console.log('end');
}

system();