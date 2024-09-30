import useDatePickerStore from '../store/useDatePickerStore';

const RecurrenceOptions = () => {
  const { recurrencePattern, setRecurrencePattern, recurrenceOptions, setRecurrenceOptions, resetAllData } = useDatePickerStore();

  const handleReset = () => {
    resetAllData();
    setRecurrencePattern('daily');
    setRecurrenceOptions({ interval: 1, daysOfWeek: [] });
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold text-gray-900">Recurrence Options</h2>

      {/* Recurrence Pattern */}
      <div className="mt-2">
        <select
          className="mt-2 p-2 border border-gray-300 rounded-md text-gray-600 bg-gray-400"
          value={recurrencePattern}
          onChange={(e) => setRecurrencePattern(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* Interval Input */}
      <div className="mt-2">
        <label className="block text-sm font-semibold font-sans mt-8 text-white-900">
          Recurrence Interval (every X days/weeks/months/years)
        </label>
        <input
          type="number"
          className="mt-1 p-2 border border-gray-300 rounded-md text-gray-600 bg-gray-400"
          value={recurrenceOptions.interval}
          onChange={(e) => setRecurrenceOptions({ interval: Number(e.target.value) })}
        />
      </div>

      {/* Weekly Pattern Options */}
      {recurrencePattern === 'weekly' && (
        <div className="mt-2">
          <label className="block text-sm text-gray-600">Specific Days of the Week</label>
          <input
            type="text"
            className="mt-1 p-2 border border-gray-300 rounded-md text-gray-600 bg-gray-400"
            placeholder="e.g., Mon, Wed, Fri"
            onChange={(e) => setRecurrenceOptions({ daysOfWeek: e.target.value.split(', ') })}
          />
        </div>
      )}

      {/* Monthly Pattern Options */}
      {recurrencePattern === 'monthly' && (
        <div className="mt-2">
          <label className="block text-sm text-gray-600">Nth Day of the Month</label>
          <input
            type="number"
            className="mt-1 p-2 border border-gray-300 rounded-md text-gray-600 bg-gray-400"
            min="1"
            max="31"
            onChange={(e) => setRecurrenceOptions({ dayOfMonth: Number(e.target.value) })}
          />
        </div>
      )}

      {/* Reset Button */}
      <button
        onClick={handleReset}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
      >
        Reset
      </button>
    </div>
  );
};

export default RecurrenceOptions;
