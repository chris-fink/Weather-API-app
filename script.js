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

            //Append elementsthe main elements
            main.appendChild(img);
            main.appendChild(h1);
            main.appendChild(h2);
            img.src = `${data.weather.icon}`;

                //Display API data
                h1.innerHTML = '';
                h2.innerHTML = '';
    });
}

//Search form to allow user to search their location
form.addEventListener('submit', (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchTerm = search.value;
    if (searchTerm) {
        searchURL('https://api.openweathermap.org/data/2.5/weather?q=' + searchTerm + '&appid=7f520456e051f1332b94327cf4f33666');
        search.value = '';
    }
});