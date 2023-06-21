export const getCurrentDateTime = () => {
  const months = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июль',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек',
  ];

  const weekdays = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ];

  const addZeroSingleDigit = (num) => {
    let newNum = num;
    if (num < 10) {
      newNum = `0${num}`;
    }
    return newNum;
  };

  const date = new Date();
  const hours = addZeroSingleDigit(date.getHours());
  const minutes = addZeroSingleDigit(date.getMinutes());
  const dayOfMonth = date.getDate();
  const dayOfWeek = weekdays[date.getDay()];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return {
    date,
    hours,
    minutes,
    dayOfMonth,
    dayOfWeek,
    month,
    year,
  };
};
