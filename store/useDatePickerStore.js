import {create} from 'zustand';

const useDatePickerStore = create((set) => ({
  selectedDate: new Date(),  // Start with today's date
  endDate: null,  // Optional end date
  recurrencePattern: 'daily',
  recurrenceOptions: {
    interval: 1,
    daysOfWeek: [],  // For weekly recurrence
    nthDayOfMonth: null,  // For monthly recurrence
  },
  recurringDates: [],  // Holds all the recurring dates
  setSelectedDate: (date) => set({ selectedDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrencePattern: (pattern) => set({ recurrencePattern: pattern }),
  setRecurrenceOptions: (options) => set((state) => ({
    recurrenceOptions: { ...state.recurrenceOptions, ...options },
  })),
  setRecurringDates: (dates) => set({ recurringDates: dates }),

resetAllData: () => set({
  selectedDate: new Date(),
  endDate: null,
  recurrencePattern: 'daily',
  recurrenceOptions: {
    interval: 1,
    daysOfWeek: [],
    nthDayOfMonth: null,
  },
  recurringDates: [],
}),
}));

export default useDatePickerStore;
