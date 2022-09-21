/* Imports */

import { renderTask } from './renderUtils.js';

/* Get DOM Elements */
const playerEnergyEl = document.getElementById('player-energy');
const playerIconEl = document.getElementById('player-icon');
const taskList = document.getElementById('task-list');

/* State */
let player = {
    energy: 10,
    type: 'hero',
    look: 'masc',
};

// Default Tasks
const beer = {
    name: 'Smash a Craft Beer',
    icon: 'beer',
    energy: 3,
};
const music = {
    name: 'Listen to Mac Demarco',
    icon: 'music',
    energy: 2,
};
const bicycle = {
    name: 'Ride a Fixie',
    icon: 'bicycle',
    energy: 4,
};
const movie = {
    name: 'watch Pulp Fiction',
    icon: 'movie',
    energy: 1,
};
const tattoo = {
    name: 'get tatted',
    icon: 'tattoo',
    energy: 6,
};
const smoke = {
    name: 'open your mind, man',
    icon: 'marijuana',
    energy: 2,
};

let tasks = [beer, bicycle, music];

/* Events */

/* Display Functions */
function displayPlayer() {
    updatePlayerEnergy();
}

function updatePlayerEnergy() {
    if (player.energy > 0) {
        // Player isn't asleep
        playerEnergyEl.textContent = player.energy;
    } else {
        // Player is asleep
        playerEnergyEl.textContent = 0;
        playerIconEl.src = `./assets/sleeping.png`;
        playerIconEl.classList.toggle('black_and_white');
    }
}

function displayTasks() {
    taskList.innerHTML = '';

    for (let task of tasks) {
        const taskEl = renderTask(task);
        taskList.append(taskEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayPlayer();
displayTasks();
