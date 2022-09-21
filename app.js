/* Imports */

import { getRandomItem } from './randomUtils.js';
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
    name: 'Watch Pulp Fiction',
    icon: 'movie',
};
const tattoo = {
    energy: 6,
    name: 'Get tatted',
    icon: 'tattoo',
};
const smoke = {
    energy: 2,
    name: 'Open your mind, man',
    icon: 'marijuana',
};

let tasks = [beer, bicycle, music];
const playerMoves = [0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5];
const taskMoves = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3];

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
        // Event Listener for doing task
        taskEl.addEventListener('click', () => {
            if (task.energy < 1) {
                // result = `You already completed this task!`;
                // displayResult();
                return;
            }

            console.log(`you clicked on ${task.name}!`);
            const playerMove = getRandomItem(playerMoves);
            const taskMove = getRandomItem(taskMoves);

            player.energy = Math.max(0, player.energy - taskMove);
            task.energy = Math.max(0, task.energy - playerMove);

            // result = '';
            if (playerMove === 0) {
                // result += 'You slacked off.';
            } else {
                // result += `You did ${task.name}, ${playerMove} times.`;
            }

            if (taskMove === 0) {
                // result += `${task.name} was easy and didn't drain any energy.`;
            } else {
                // result += `${task.name} drained your energy by ${taskMove}.`;
            }

            if (task.energy < 1) {
                // completed++;
                // displayScoreboard();
            }

            // displayResult();
            displayPlayer();
            displayTasks();
        });
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayPlayer();
displayTasks();
