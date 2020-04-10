import {default as createSiteMenuTemplate} from './components/menu.js';
import {default as createFilterTemplate} from './components/filter.js';
import {default as createBoardTemplate} from './components/board.js';
import {default as createTaskTemplate} from './components/task.js';
import {default as createTaskEditTemplate} from './components/task-editor.js';
import {default as createLoadMoreButtonTemplate} from './components/load-button.js';
import {generateTasks} from './mock/task.js';
import {default as generateFilters} from './mock/filter.js';

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const render = (container, template) => {
  container.insertAdjacentHTML(`beforeend`, template);
};

const renderTasks = (firstElement, lastElement) => {
  tasks.slice(firstElement, lastElement)
    .forEach((task) => render(taskListElement, createTaskTemplate(task)));
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate(filters));
render(siteMainElement, createBoardTemplate());

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);

render(taskListElement, createTaskEditTemplate(tasks[0]));

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

renderTasks(1, showingTasksCount);

render(boardElement, createLoadMoreButtonTemplate());

const loadMoreButton = boardElement.querySelector(`.load-more`);

loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  renderTasks(prevTasksCount, showingTasksCount);

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
