import moment from 'moment';
 
export const getIntervalsDate = (stringFirstDate: string, stringLastDate: string) => {
  const firstDate = moment(stringFirstDate, 'DD/MM/YYYY');
  const lastDate = moment(stringLastDate, 'DD/MM/YYYY');

  let firstMonth = firstDate.get('month');
  let firstYear = firstDate.get('year');
  
  const lastMonth = lastDate.get('month');
  const lastYear = lastDate.get('year');
  
  const dateArray = [];

  while (true) {
    if (firstMonth === lastMonth && firstYear === lastYear) {
      break;
    }

    if (firstMonth === 12) {
      firstMonth = 0;
      ++firstYear;
      continue;
    }

    const zeroFilledMonth = ('0' + (firstMonth + 1)).slice(-2);
    const date = moment(`01/${zeroFilledMonth}/${firstYear}`, 'DD/MM/YYYY')
      .format('MMM[.] YYYY');
    
    dateArray.push(date);

    ++firstMonth;
  }

  return dateArray;
}