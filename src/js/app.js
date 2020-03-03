/* eslint-disable no-param-reassign */
export default class App {
  init() {
    this.field = Array.from(document.querySelector('ul.field').children);
    setInterval(() => {
      const lastIndex = this.field.findIndex((item) => item.classList.contains('active'));
      const activeIndex = this.newIndex(lastIndex);
      this.field[lastIndex].classList.remove('active');
      this.field[activeIndex].classList.add('active');
    }, 500);
  }

  newIndex(lastIndex, activeIndex) {
    activeIndex = Math.floor(Math.random() * this.field.length);
    if (activeIndex === lastIndex) {
      return this.newIndex(lastIndex, activeIndex);
    }
    return activeIndex;
  }
}
