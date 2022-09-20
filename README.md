## Portland Simulator

![](<./plan/Wireframe_(Updated).png>)

## HTML: Hardcoded Elements:

-   `<section class="banner" id="scoreboard"></section>`
-   `<section class="banner" id="results-display"></section>`
-   `<section class="player card">`
-   `<p id="player-energy" class="stat">20</p>`
-   `<img id="player-image">`
-   `<section class=”portlander-section”>`
-   `<form id=”add-task-form”>`
-   `<input name=”name” class="task-input" id="task-name" >`
-   `<input name="icon" class="task-icon" id="task-icon">`
-   `<button id="add-btn">+</button>`
-   `<ul id=”task-list”>`
-   `<button id="remove-button">Remove-Completed-Tasks</button>`

## HTML: Dynamically Generated Elements:

-   `<li kclass=”task-card”>`
-   `<span id="task-energy"></span>`
-   `<img id="task-icon" alt=”task” >`
-   `<span id="task-name" class=”name” ></span>`

## HTML: Modified Elements:

-   `scoreboard.textContent`
-   `resultsDisplay.textContent`
-   `playerEnergy.textContent`
-   `taskEnergy.textContent`
-   `taskIcon.src & taskIcon.alt`
-   `taskName.textContent`

## Events:

-   `addBtn'
    1. Create new task object with input from form
    1. Push new task onto tasks[] array
    1. Render and display tasks[] in DOM
-   `rmBtn'
    1. Create unfinishedTasks[]
    1. Populate unfinishedTasks[] with only unfinished tasks
    1. set tasks = unfinishedTasks[]
    1. Render and display tasks[] in DOM
