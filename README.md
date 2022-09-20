## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Look at the drawing and name the HTML elements you'll need to realize your vision**
1. **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

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

-   `<li class=”task-card”>`
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

## State Variables:

```js
let player = {
    energy: 20,
    type: 'hero',
    look: 'masc',
};

let result = '';

let finished = 0;

let tasks = [
    {
        name: 'Smash a Craft Beer',
        icon: 'beer',
        energy: 3,
    },
    {
        name: 'Listen to Mac Demarco',
        icon: 'music',
        energy: 2,
    },
    {
        name: 'Ride a Fixie',
        icon: 'bicycle',
        energy: 4,
    },
];

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

const playerMoves = [0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5];
const taskMoves = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3];
const taskTypes = [
    beer,
    beer,
    beer,
    bicycle,
    bicycle,
    bicycle,
    music,
    music,
    movie,
    movie,
    tattoo,
    smoke,
];
```
