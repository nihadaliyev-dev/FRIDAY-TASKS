import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
        pomodoros: 0,
      });
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    incrementPomodoro: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.pomodoros += 1;
      }
    },
  },
});

export const { addTask, toggleTask, incrementPomodoro } = tasksSlice.actions;
export default tasksSlice.reducer;
