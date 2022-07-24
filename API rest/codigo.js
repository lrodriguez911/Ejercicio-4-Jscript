const app = document.querySelector('.api');
const URL = 'https://jsonplaceholder.typicode.com/users';

fetch(URL)
.then(e => e.json())
.then(ejason => console.log(ejason.map(e => e.name)))

//using async await
const async fetchApi = (URL) => {
    await console.log('hola')
}
fetchApi()