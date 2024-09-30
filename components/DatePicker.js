import React from 'react';
import DatePicker from 'react-date-picker';
import Calendar from 'react-calendar';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import useDatePickerStore from '../store/useDatePickerStore';
import RecurrenceOptions from './RecurrenceOptions';
import { getRecurringDates } from '../utils/dateUtils';

const CustomDatePicker = () => {
  const { selectedDate, setSelectedDate, endDate, setEndDate, recurrencePattern,resetAllData } = useDatePickerStore();

  const recurringDates = getRecurringDates(selectedDate, endDate, recurrencePattern);

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      return recurringDates.some(
        (recurDate) => recurDate.toDateString() === date.toDateString()
      ) ? 'recurring-date' : null;
    }
  };
  const handleClearAllDates = () => {
    resetAllData();
  };

  return (
    <div className="p-4 max-w-5xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg shadow-2xl text-gray-100">
  <h1 className="text-2xl font-bold text-center mb-4 text-purple-400">Event Scheduler</h1>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Start and End Date Picker */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-purple-300">Select Dates</h2>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Start Date</label>
            <DatePicker
              onChange={setSelectedDate}
              value={selectedDate}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">End Date</label>
            <DatePicker
              onChange={setEndDate}
              value={endDate}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
              minDate={selectedDate}
              calendarClassName="dark-calendar"
            />
          </div>
        </div>

        {/* Recurrence Options */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-purple-300">Recurrence Options</h2>
          <RecurrenceOptions className="text-gray-300" />
        </div>

        {/* Recurring Dates Calendar */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-purple-300">Recurring Dates</h2>
          <Calendar
            value={selectedDate}
            tileClassName={tileClassName}
            className="w-full custom-calendar border-none bg-gray-800 text-white"
          />
        </div>
      </div>
      {/* Add this button at the bottom of the component */}
      <div className="mt-4 text-center">
        <button
          onClick={handleClearAllDates}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Clear all dates
        </button>
      </div>
    </div>
  );
};

export default CustomDatePicker;
