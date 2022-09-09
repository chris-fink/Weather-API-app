//API variables
const url = 'https://api.openweathermap.org/data/2.5/weather?q=spartanburg&appid=7f520456e051f1332b94327cf4f33666&units=imperial';
const key = '7f520456e051f1332b94327cf4f33666';
const main = document.querySelector('main');
const search = document.querySelector('#search');
const form = document.querySelector('form');

//Event Listener to allow user to search their location
form.addEventListener('submit', (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchTerm = search;
    //Uncaught TypeError: Cannot read properties of null (reading 'value') at HTMLFormElement.<anonymous> (script.js:13:31)
    if (searchTerm) {
        searchLocation('https://api.openweathermap.org/data/2.5/weather?q=' + searchTerm + '&appid=' + key + '&units=imperial');
        //URL should be https://api.openweathermap.org/data/2.5/weather?q=spartanburg&appid=7f520456e051f1332b94327cf4f33666&units=imperial
        search.value = '';
    }
});

//User search directs & updates API URL
function searchLocation(url) {
    fetch(url, settings)
    .then(res => res.json())
    .then((res) => {
        let city = res(data.name);
        let temp = res(Math.round(data.main.temp));
        let weather = res(data.weather.description);
        let image = res(data.weather.icon);
    })
    .then(Log => {
        console.log(city);
        console.log(temp);
        console.log(weather);
        console.log(image);
    })

        //Create HTML elements
        document.getElementById("image").innerHTML = image;
        document.getElementById("city").innerHTML = city;
        document.getElementById("temp").innerHTML = temp;
        document.getElementById("weather").innerHTML = weather;

            //Append elementsthe main elements
            main.appendChild(img);
            main.appendChild(h1);
            main.appendChild(h2);
            main.appendChild(p);
            img.src = `${data.weather.icon}`;

                //Display API data
                //h1.innerHTML = `${data.name}`;
                //h2.innerHTML = `${Math.round(data.main.temp)} °F`;
                //p.innerHTML = `${data.weather.description}`;
}

