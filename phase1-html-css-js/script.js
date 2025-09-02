// Function to handle click events on list items
function handleClick(event) {
    document.querySelectorAll('li').forEach(function(li) {
        li.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

// Add click event listener to all li elements
document.querySelectorAll('li').forEach(function(li) {
    li.addEventListener('click', handleClick);
});

// Function to change the city and temperature
function changeCity() {
    let city = document.getElementById("cityInput").value || "South Africa";
    let temperature = prompt("What temperature is it?");
    let heading = document.querySelector("h1");
    let emoji = temperature < 0 ? "❄️" : "☀️";
    heading.innerHTML = `${emoji}<br />Currently ${temperature}°C in ${city}`;
}

// Add click event listener to the button
let changeButton = document.querySelector("button");
changeButton.addEventListener("click", changeCity);
