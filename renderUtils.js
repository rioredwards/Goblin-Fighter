export function renderTask(task) {
    const liTaskContainer = document.createElement('li');
    const spanTaskEnergy = document.createElement('span');
    const imgTaskIcon = document.createElement('img');
    const spanTaskName = document.createElement('span');
    liTaskContainer.append(spanTaskEnergy, imgTaskIcon, spanTaskName);
    return liTaskContainer;
}
