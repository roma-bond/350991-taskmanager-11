import {default as createSiteMenuTemplate} from './components/menu.js';
import {default as createFilterTemplate} from './components/filter.js';
import {default as createBoardTemplate} from './components/board.js';
import {default as createTaskTemplate} from './components/task.js';
import {default as createTaskEditTemplate} from './components/task-editor.js';
import {default as createLoadMoreButtonTemplate} from './components/load-button.js';

const TASK_COUNT = 3;

const render = (container, template) => {
  container.insertAdjacentHTML(`beforeend`, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate());
render(siteMainElement, createBoardTemplate());

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);

render(taskListElement, createTaskEditTemplate());

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate());
}

render(boardElement, createLoadMoreButtonTemplate());
