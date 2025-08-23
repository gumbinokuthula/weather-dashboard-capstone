// Function to handle click events on list items
function handleClick(event) {
    // Remove 'active' class from all li elements
    document.querySelectorAll('li').forEach(function(li) {
        li.classList.remove('active');
    });

    // Add 'active' class to the clicked li element
    event.currentTarget.classList.add('active');
}

// Add click event listener to all li elements
document.querySelectorAll('li').forEach(function(li) {
    li.addEventListener('click', handleClick);
});

// Function to change the city and temperature
function changeCity() {
    let city = prompt("What city do you live in?");
    let temperature = prompt("What temperature is it?");
    let heading = document.querySelector("h1");
    if (temperature < 0) {
        heading.innerHTML = "☹️<br />Currently " + temperature + "°C in " + city;
    } else {
        heading.innerHTML = "😄<br />Currently " + temperature + "°C in " + city;
    }
}

// Add click event listener to the button
let changeButton = document.querySelector("button");
changeButton.addEventListener("click", changeCity);
