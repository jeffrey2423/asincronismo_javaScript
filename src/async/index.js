const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        true
            ? setTimeout(() => {
                resolve('hola');
            }, 3000)
            : reject('error')
    })
}

const doSomething = async () =>{
    const some = await doSomethingAsync();
    console.log(some)
}

console.log('antes')
doSomething()
console.log('despues')

const doSomething2 = async () =>{
    try {
        const some = await doSomethingAsync();
        console.error(some)
    } catch (error) {
        console.error(error)
    }  
}

console.log('antes 1')
doSomething2()
console.log('despues 1')
