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
    energy: 3,
    name: 'Smash a Craft Beer',
    icon: 'beer',
};
const music = {
    energy: 2,
    name: 'Listen to Mac Demarco',
    icon: 'music',
};
const bicycle = {
    energy: 4,
    name: 'Ride a Fixie',
    icon: 'bicycle',
};
const movie = {
    energy: 1,
    name: 'watch Pulp Fiction',
    icon: 'movie',
};
const tattoo = {
    energy: 6,
    name: 'get tatted',
    icon: 'tattoo',
};
const smoke = {
    energy: 2,
    name: 'open your mind, man',
    icon: 'marijuana',
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
