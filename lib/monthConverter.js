export default function convertMonth(numberMonth) {
  switch(numberMonth) {
    case 1:
      return "января";
      break;
    case 2:
      return "февраля";
      break;
    case 3:
      return "марта";
      break;
    case 4:
      return "апреля";
      break;
    case 5:
      return "мая";
      break;
    case 6:
      return "июня";
      break;
    case 7:
      return "июля";
      break;
    case 8:
      return "августа";
      break;
    case 9:
      return "сентября";
      break;
    case 10:
      return "октября";
      break;
    case 11:
      return "ноября";
      break;
    default:
      return "декабря";
      break;
  }
};
