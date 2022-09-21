export function renderTask(task) {
    const liTaskContainer = document.createElement('li');
    liTaskContainer.classList.value = 'task-card';
    const spanTaskEnergy = document.createElement('span');
    spanTaskEnergy.id = 'task-energy';
    spanTaskEnergy.innerHTML = task.energy;
    const imgTaskIcon = document.createElement('img');
    imgTaskIcon.id = 'task-icon';
    imgTaskIcon.src = `./assets/${task.icon}.png`;
    imgTaskIcon.alt = task.icon;
    const spanTaskName = document.createElement('span');
    spanTaskName.classList.value = 'task-name';
    spanTaskName.id = 'task-name';
    spanTaskName.innerHTML = task.name;
    liTaskContainer.append(spanTaskEnergy, imgTaskIcon, spanTaskName);
    return liTaskContainer;
}
