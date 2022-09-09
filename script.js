//API variables
const url = 'https://api.openweathermap.org/data/2.5/weather?q={search}&appid={key}';
const key = '7f520456e051f1332b94327cf4f33666';
const main = document.querySelector('main');
const search = document.querySelector('#search');
const form = document.querySelector('form');


//User search directs & updates API URL
function searchLocation(url) {
    fetch(url)
    .then(res => res.json())
    .then(function(data) {

        //Create HTML elements
        const img = document.createElement('img');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');

            //Append elementsthe main elements
            main.appendChild(img);
            main.appendChild(h1);
            main.appendChild(h2);
            main.appendChild(p);
            img.src = `${data.weather.icon}`;

                //Display API data
                h1.innerHTML = `${data.name}`;
                h2.innerHTML = `${Math.round(data.main.temp)} °F`;
                p.innerHTML = `${data.weather.description}`;
    });
}

//Search form to allow user to search their location
form.addEventListener('submit', (e) => {
    e.preventDefault();
    main.innerHTML = '';

    //Uncaught TypeError: Cannot read properties of null (reading 'value') at HTMLFormElement.<anonymous> (script.js:40:31)
    const searchTerm = search.value;
    if (searchTerm) {
        searchURL('https://api.openweathermap.org/data/2.5/weather?q=' + searchTerm + '&appid=' + key + '&units=imperial');
        //URL should be https://api.openweathermap.org/data/2.5/weather?q=spartanburg&appid=7f520456e051f1332b94327cf4f33666&units=imperial
        search.value = '';
    }
        console.log
});
