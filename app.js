/* Imports */

import { getRandomItem, getRandomNumber } from './randomUtils.js';
import { renderTask } from './renderUtils.js';

/* Get DOM Elements */
const playerEnergyEl = document.getElementById('player-energy');
const playerIconEl = document.getElementById('player-icon');
const taskList = document.getElementById('task-list');
const scoreboard = document.getElementById('scoreboard');
const resultsDisplay = document.getElementById('results-display');
const addTaskForm = document.getElementById('add-task-form');

/* State */
let result = '';
let completed = 0;

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
const energies = [1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 6];
/* Events */

/* Display Functions */
function displayPlayer() {
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
                result = `You already completed this task! `;
                displayResult();
                return;
            }

            console.log(`you clicked on ${task.name}!`);
            const playerMove = getRandomItem(playerMoves);
            const taskMove = getRandomItem(taskMoves);

            player.energy = Math.max(0, player.energy - taskMove);
            task.energy = Math.max(0, task.energy - playerMove);

            result = '';
            if (playerMove === 0) {
                result += 'You slacked off. ';
            } else {
                result += `You did ${task.name}, ${playerMove} times. `;
            }

            if (taskMove === 0) {
                result += `${task.name} was easy and didn't drain any energy. `;
            } else {
                result += `${task.name} drained your energy by ${taskMove}. `;
            }

            if (task.energy < 1) {
                completed++;
                displayScoreboard();
            }

            displayResult();
            displayPlayer();
            displayTasks();
        });
    }
}

function displayResult() {
    resultsDisplay.textContent = result;
}

function displayScoreboard() {
    scoreboard.textContent = `You have completed ${completed} task(s).`;
}

addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(addTaskForm);

    const randEnergy = getRandomItem(energies);
    console.log(randEnergy);
    const task = {
        energy: randEnergy,
        name: formData.get('name'),
        icon: formData.get('icon'),
    };
    tasks.push(task);

    result = `You added ${task.name} to the task-list!`;

    displayResult();
    displayTasks();

    addTaskForm.reset();
});

// On page load:
displayPlayer();
displayTasks();
displayScoreboard();
