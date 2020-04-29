import BoardComponent from "./components/board.js";
import BoardController from "./controllers/board.js";
import FilterComponent from "./components/filter.js";
import SiteMenuComponent from "./components/site-menu.js";
import {generateTasks} from './mock/task.js';
import generateFilters from "./mock/filter.js";
import {RenderPosition, render} from "./utils/render.js";

const TASK_COUNT = 22;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const tasks = generateTasks(TASK_COUNT);
const filters = generateFilters();

render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFORE_END);
render(siteMainElement, new FilterComponent(filters), RenderPosition.BEFORE_END);

const boardComponent = new BoardComponent();
const boardController = new BoardController(boardComponent);

render(siteMainElement, boardComponent, RenderPosition.BEFORE_END);
boardController.render(tasks);
