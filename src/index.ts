import {getAppliedDosesPercentageBySocialGroup}  from './models/dao/AppliedDosesPercentageBySocialGroupDao';
import { generateMultiAxisLineChart, generatePieChart } from './utils/ChartUtils';
import { getSentDosesMonthlyAnalyzes } from './models/dao/MonthlySentDosesDao';
import { parseCsvFileToStringArrays } from './utils/FileUtils';
import { getIntervalsDate } from './utils/DateUtils';

import 'moment/locale/pt-br';

const DosesStuff = () => {
  const sentDoses = parseCsvFileToStringArrays('doses-enviadas.csv');
  
  const FirstDate = sentDoses[0][0];
  const LastDate = sentDoses[sentDoses.length - 1][0];
  const dates = getIntervalsDate(FirstDate, LastDate);
  
  const sentDosesMonthlyAnalyzes = getSentDosesMonthlyAnalyzes(sentDoses, dates);

  generateMultiAxisLineChart(
    'Quantidade de doses enviadas por mês por tipo de vacina',
    sentDosesMonthlyAnalyzes,
    dates
  );
}

const appliedDosesStuff = () => {
  const appliedDoses = parseCsvFileToStringArrays('doses-aplicadas.csv');
  const appliedDosesPercentageBySocialGroup =
    getAppliedDosesPercentageBySocialGroup(appliedDoses);
  
  generatePieChart(
    'Percentual de doses totais aplicadas por grupo social',
    appliedDosesPercentageBySocialGroup
  );
}

DosesStuff();
appliedDosesStuff();