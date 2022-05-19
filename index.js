const url = "https://api.openweathermap.org/data/2.5/"
const key = "79271e85b3970cad9d0895e10a5dd83c"

var query = `${url}weather?q=istanbul&appid=${key}&units=metric&lang=tr`;
// console.log(query);
fetch(query)
    .then(res => res.json())
    .then(res => {
        console.log(res);
    })
;