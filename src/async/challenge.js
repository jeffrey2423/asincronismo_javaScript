const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';


const doSomething = async (url_api)=>{
    try {
        const data = await fetchData(url_api);
        const data1 = await fetchData(`${url_api}${data.results[0].id}`)
        const data2 = await fetchData(data1.origin.url)
        console.log(data.info.count);
        console.log(data1.name);
        console.log(data2.dimension);
    } catch (error) {
        console.error(error)
    }
}

console.log('antes')
doSomething(API)
console.log('despues')