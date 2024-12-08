// Play background music
document.getElementById("backgroundMusic").play();

// Add falling effects (e.g., sprinkles, balloons, snowflakes, hearts)
const fallingEffects = document.getElementById('fallingEffects');

// Function to create falling animations with Font Awesome icons
function createFallingElement(className, count) {
    for (let i = 0; i < count; i++) {
        const element = document.createElement('div');
        element.classList.add(className);
        element.style.left = `${Math.random() * 100}%`; // Random horizontal position
        element.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration
        element.style.animationDelay = `${Math.random() * 3}s`; // Random delay

        // Use Font Awesome icons based on the class name
        if (className === 'heart') {
            element.innerHTML = "<i class='fas fa-heart'></i>"; // Font Awesome heart icon
            element.style.fontSize = "30px"; // Adjust size for better visibility
        } else if (className === 'balloon') {
            element.innerHTML = "<i class='fas fa-balloon'></i>"; // Font Awesome balloon icon
            element.style.fontSize = "40px"; // Adjust size
        } else if (className === 'gift') {
            element.innerHTML = "<i class='fas fa-gift'></i>"; // Font Awesome gift icon
            element.style.fontSize = "35px"; // Adjust size
        } else if (className === 'snowflake') {
            element.innerHTML = "<i class='fas fa-snowflake'></i>"; // Font Awesome snowflake icon
            element.style.fontSize = "25px"; // Adjust size
        } else if (className === 'sprinkle') {
            element.innerHTML = "<i class='fas fa-sparkles'></i>"; // Font Awesome sparkles icon
            element.style.fontSize = "25px"; // Adjust size
        }

        fallingEffects.appendChild(element);
    }
}

// Trigger falling elements (hearts, balloons, gifts, snowflakes, sprinkles)
createFallingElement('heart', 10);
createFallingElement('balloon', 10);
createFallingElement('gift', 5);
createFallingElement('snowflake', 20);
createFallingElement('sprinkle', 30);

// Hover effect for the cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', function() {
        const quote = card.querySelector('.quote');
        quote.style.opacity = 1;
    });

    card.addEventListener('mouseleave', function() {
        const quote = card.querySelector('.quote');
        quote.style.opacity = 0;
    });
});
