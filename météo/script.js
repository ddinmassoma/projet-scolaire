const searchBtn = document.getElementById("searchBtn"); 
const resultDiv = document.getElementById("result"); 

const API_KEY = "7ce8bad63cc7aa7bcd3403fd00932f86"; 
searchBtn.addEventListener("click", async () => { 
    const city = document.getElementById("cityInput").value; 
    const response = await fetch( 
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`  ); 
    const data = await response.json();
    console.log(data.main.temp) ;
    if (data.cod === "404") { 
        resultDiv.innerHTML = "Ville introuvable."; 
        return; 
}
 const icon = data.weather[0].icon; 

resultDiv.innerHTML = ` 
    <h2>${data.name}</h2> 
    <p>Température : ${data.main.temp}°C</p> 
    <p>Météo : ${data.weather[0].description}</p> 
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" /> 
`;
});

localStorage.setItem("lastCity", city);  
window.addEventListener("load", () => { 
    const lastCity = localStorage.getItem("lastCity"); 
    if (lastCity) { 
        document.getElementById("cityInput").value = lastCity; 
        searchBtn.click(); 
} 
});