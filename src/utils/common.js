import moment from "moment";

const formatTime = (date) => {
  return moment(date).format(`HH:mm`);
};

const formatDate = (date) => {
  return moment(date).format(`DD MMMM`);
};

export {formatTime, formatDate};
