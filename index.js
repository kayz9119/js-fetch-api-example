// Base URL'imi belirliyorum. Bu URL üzerinden hava durumunu çekeceğimden dolayı sürekli URL girmektense değişkene atayıp onu kullanmak daha basit olacaktır.
const url = "https://api.openweathermap.org/data/2.5/"

// openweathermap.org'un bana sağladığı API anahtarımı belirledim. Bunu da veri çekerken kullanacağım, dolayısıyla bunu da bir değişkenin içine almak daha sağlıklı bir kullanım şekli olacaktır.
const key = "79271e85b3970cad9d0895e10a5dd83c"

// query'mi yani sorgumu hazırlıyorum. dediğim gibi değişkenleri kullanmak bana kolaylık sağlıyor, string verilerimizi `` işaretleri arasında yazarsak, aşağıdaki gibi javascript komutlarını ${} içerisinde belirtebiliyoruz ve bu hem dinamiklik katıyor hem de fazladan yazı yazmamıza engel olabiliyor.
var query = `${url}weather?q=istanbul&appid=${key}&units=metric&lang=tr`;

// fetch metodunu kullanarak query olarak belirlediğim adrese istek yolluyorum.
fetch(query)
    .then(res => res.json()) // dönen değeri JSON tipinde bir objeye çevirerek tekrar geri döndürüyorum, bu sayede bir sonraki adımda her seferinde JSON formatına çevirmeme gerek kalmayacak
    .then(res => {
        console.log(res); // yukarısa JSON formatına döndürdüğüm sorguyu basit bir şekilde konsola yazdırabiliyorum.
    })
;