//url = https://api.openweathermap.org/data/2.5/weather?q={city name}&units=imperial&appid={API key}

//Create object for storing the functions and variables for the API
let weather = {
    "apiKey" : "7f520456e051f1332b94327cf4f33666",

    //Create fetch function to retrieve JSON
fetchWeather: function (city) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + 
            city +
            "&units=imperial&appid=" +
            this.apiKey
        )
            //then function to tell JS what to do with the API response
        .then((response) => response.json())
            //another then function to tell JS what to do with the JSON data returned
        .then((data) => this.displayWeather(data))
    },
    //New function to display the weather on the page
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        //console log to make sure this code is working
        console.log(name,icon,description,temp,humidity,speed)
        //Display weather data on screen 
        document.querySelector(".card-title").innerText = name;
        document.querySelector(".card-img-top").src = 
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".card-weather").innerText = description.toUpperCase();
        document.querySelector(".card-temp").innerText = Math.round(temp) + "°F";
        document.querySelector(".card-humidity").innerText = 
            "Humidity: " + humidity + "%";
        document.querySelector(".card-wind").innerText = 
            "Wind Speed: " + speed + " mph";
        document.querySelector(".card-weather").classList.remove("loading");
            //background updated based on search
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/2000x1000/?' + name )";
    },
        //takes searched city and fetches weather
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

    //Search button listener
document
    .querySelector(".search button")
    .addEventListener("click", function () {
        weather.search();
    });
        //event listener on input box for 'enter' key
    document
        .querySelector(".search-bar")
        .addEventListener("keyup", function () {
            if (event.key == "Enter") {
                weather.search();
            }
    });

    //preload a search for Denver weather so client doesn't see dummy data    
    weather.fetchWeather("Denver");
