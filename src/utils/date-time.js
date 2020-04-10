const castTimeFormat = (value) => String((`0` + value).slice(-2));

const formatTime = (date) => {
  let hours = date.getHours();
  const interval = (hours >= 12 && hours < 24) ? `PM` : `AM`;
  hours = hours % 12;
  hours = hours ? hours : 12;
  const minutes = date.getMinutes();
  return `${castTimeFormat(hours)}:${castTimeFormat(minutes)} ${interval}`;
};

export {formatTime};
