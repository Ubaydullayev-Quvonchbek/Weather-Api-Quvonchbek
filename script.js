let input = document.querySelector('input');
let button = document.querySelector('button');

button.onclick = () => {
    let key = "84a3781201a7f9a9bda21e4f05b6c2f0"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${key}`)
        .then((response) => response.json())
        .then((data) => {
            let city = document.querySelector('h4');
            let sunny_cloudy = document.querySelector('h6');
            let gradus = document.querySelector('.gradus');
            let max = document.querySelector('h5');
            let min = document.querySelector('h3');
            city.innerHTML = data.name;
            sunny_cloudy.innerHTML = data.weather[0].main;
            gradus.innerHTML = Math.ceil(data.main.temp) + "°";
            max.innerHTML = Math.ceil(data.main.temp) + "°";
            min.innerHTML = Math.floor(data.main.feels_like) + "°";
            input.value = "";
            console.log(data);
        }).catch((error) => {
            alert("Bunday shahar mavjud emas");
            let city = document.querySelector('h4');
            let sunny_cloudy = document.querySelector('h6');
            let gradus = document.querySelector('.gradus');
            let max = document.querySelector('h5');
            let min = document.querySelector('h3');
            city.innerHTML = "London";
            sunny_cloudy.innerHTML = "CLOUDS";
            gradus.innerHTML = "0°";
            max.innerHTML = "0°";
            min.innerHTML = "0°";
            input.value = "";
            console.log(data);
        })
}