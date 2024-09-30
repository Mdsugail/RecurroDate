import 'react-calendar/dist/Calendar.css';
import useDatePickerStore from '../store/useDatePickerStore';

const CalendarPreview = () => {
  const { recurringDates, selectedDate, recurrencePattern, recurrenceOptions } = useDatePickerStore();

  // Generate recurring dates based on the recurrence pattern
  const generateRecurringDates = () => {
    let dates = [];
    if (recurrencePattern === 'daily') {
      dates = [selectedDate];
    } else if (recurrencePattern === 'weekly') {
      // For simplicity, let's add weekly recurrences for 4 weeks
      const start = new Date(selectedDate);
      for (let i = 0; i < 4; i++) {
        const newDate = new Date(start);
        newDate.setDate(start.getDate() + i * 7); // Weekly recurrence
        dates.push(newDate);
      }
    }
    return dates;
  };

  return (
    <div className="mt-4">
    
    </div>
  );
};

export default CalendarPreview;
