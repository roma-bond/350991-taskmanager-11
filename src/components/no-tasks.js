import {createElement} from "../utils/dom.js";

const createNoTasksTemplate = () => {
  return (
    `<p class="board__no-tasks">
      Click «ADD NEW TASK» in menu to create your first task
    </p>`
  );
};

class NoTasks {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNoTasksTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

export default NoTasks;
