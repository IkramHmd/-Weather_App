
const apikey = "ca39b57c1a9bde9312b025669e75a26c" ;
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=" ; 
        const searchbox = document.querySelector(".searchBox input" ) ;
        const searchbtn = document.querySelector(".searchBox button" ) ; 
        const weatherIcon = document.querySelector(".Weater-icon");
        async function checkweather(city) {
            const responce = await fetch(apiUrl + city + `&appid=${apikey}`) ;
            var data = await responce.json() ; 
            console.log(data) ; 
            document.querySelector(".City").innerHTML = data.name ; 
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C"; 
            document.querySelector(".humidity").innerHTML = data.main.humidity + " %"; 
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h" ;  

            if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") { 
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }
        }
        searchbtn.addEventListener("click" , ()=> {
            checkweather(searchbox.value) ; 
        }) ; 
        