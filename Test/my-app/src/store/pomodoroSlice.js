import { createSlice } from '@reduxjs/toolkit';

const pomodoroSlice = createSlice({
  name: 'pomodoro',
  initialState: {
    workDuration: 25 * 60, // 25 minutes in seconds
    breakDuration: 5 * 60, // 5 minutes in seconds
    isRunning: false,
    isBreak: false,
  },
  reducers: {
    setIsRunning: (state, action) => {
      state.isRunning = action.payload;
    },
    setIsBreak: (state, action) => {
      state.isBreak = action.payload;
    },
    updateWorkDuration: (state, action) => {
      state.workDuration = action.payload * 60;
    },
    updateBreakDuration: (state, action) => {
      state.breakDuration = action.payload * 60;
    },
  },
});

export const {
  setIsRunning,
  setIsBreak,
  updateWorkDuration,
  updateBreakDuration,
} = pomodoroSlice.actions;
export default pomodoroSlice.reducer; 