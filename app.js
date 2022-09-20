/* Imports */

/* Get DOM Elements */
const playerEnergy = document.getElementById('player-energy');
const playerIcon = document.getElementById('player-icon');

/* State */
let player = {
    energy: 10,
    type: 'hero',
    look: 'masc',
};
/* Events */

/* Display Functions */
function displayPlayer() {
    updatePlayerEnergy();
}

function updatePlayerEnergy() {
    if (player.energy > 0) {
        // Player isn't asleep
        playerEnergy.textContent = player.energy;
    } else {
        // Player is asleep
        playerEnergy.textContent = 0;
        playerIcon.src = `./assets/sleeping.png`;
        playerIcon.classList.toggle('black_and_white');
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayPlayer();
