import { addDays, addWeeks, addMonths, addYears, isBefore, isAfter } from 'date-fns';

export const getRecurringDates = (startDate, endDate, recurrencePattern) => {
  if (!startDate || !recurrencePattern) return [];

  const dates = [];
  let currentDate = new Date(startDate);

  while (!endDate || isBefore(currentDate, endDate)) {
    dates.push(new Date(currentDate));

    switch (recurrencePattern) {
      case 'daily':
        currentDate = addDays(currentDate, 1);
        break;
      case 'weekly':
        currentDate = addWeeks(currentDate, 1);
        break;
      case 'monthly':
        currentDate = addMonths(currentDate, 1);
        break;
      case 'yearly':
        currentDate = addYears(currentDate, 1);
        break;
      default:
        return dates;
    }

    if (isAfter(currentDate, endDate)) break;
  }

  return dates;
};
