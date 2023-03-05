let input = document.querySelector('input')
let button = document.querySelector('button')

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
            city.innerHTML = data.name
            sunny_cloudy.innerHTML = data.weather[0].main
            gradus.innerHTML = Math.ceil(data.main.temp) + "°"
            max.innerHTML = Math.ceil(data.main.temp) + "°"
            min.innerHTML = Math.floor(data.main.feels_like) + "°"
            input.value = ""
            console.log(data);
        }).catch((error) => {
            alert("Bunday shahar mavjud emas")
            let city = document.querySelector('h1');
            let sunny_cloudy = document.querySelector('h6');
            let gradus = document.querySelector('.gradus');
            let max = document.getElementById('max');
            let min = document.getElementById('min');
            city.innerHTML = "London"
            sunny_cloudy.innerHTML = "Cloudy"
            gradus.innerHTML = "6°"
            max = "6°"
            min = "3°"
            input.value = ""
        })
}

// window.addEventListener("keyup", (e) => {
//     if (e.key === "Enter") {
//         let key = "84a3781201a7f9a9bda21e4f05b6c2f0"
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=${key}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 let city = document.querySelector(".city")
//                 let gradus = document.querySelector(".gradus")
//                 let min_temp = document.querySelector(".min")
//                 let max_temp = document.querySelector(".max")
//                 let city_name = data.name
//                 let temp = Math.floor(data.main.temp)
//                 let max = data.main.temp_max
//                 let min = data.main.feels_like
//                 gradus.innerHTML = temp + "°"
//                 min_temp.innerHTML = "Min :" + min + "%"
//                 max_temp.innerHTML = "Max : " + max + "%"
//                 city.innerHTML = city_name
//                 inp.value = ""

//             }).catch((err) => {
//                 alert("Bunday shahar mavjud emas")
//             })
//         // console.log(inp.value)
//     } else {
//         button.onclick = () => {
//             let key = "84a3781201a7f9a9bda21e4f05b6c2f0"
//             fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=${key}`)
//                 .then((res) => res.json())
//                 .then((data) => {
//                     let city = document.querySelector(".city")
//                     let gradus = document.querySelector(".gradus")
//                     let min_temp = document.querySelector(".min")
//                     let max_temp = document.querySelector(".max")
//                     let city_name = data.name
//                     let temp = Math.floor(data.main.temp)
//                     let max = data.main.temp_max
//                     let min = data.main.feels_like
//                     gradus.innerHTML = temp + "°"
//                     min_temp.innerHTML = "Min : " + min + "%"
//                     max_temp.innerHTML = "Max : " + max + "%"
//                     city.innerHTML = city_name
//                     inp.value = ""

//                 }).catch((err) => {
//                     alert("Bunday shahar mavjud emas")
//                 })
//         }
//     }
// })
