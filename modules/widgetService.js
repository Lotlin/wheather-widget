import {
  renderWidgetToday,
  renderWidgetOtrher,
  renderWidgetForecast,
}
  from './render.js';

export const startWidget = () => {
  const widget = document.createElement('div');
  widget.classList.add('widget');

  renderWidgetToday(widget);
  renderWidgetOtrher(widget);
  renderWidgetForecast(widget);

  return widget;
};
