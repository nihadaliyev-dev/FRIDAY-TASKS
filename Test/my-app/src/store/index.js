import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import pomodoroReducer from "./pomodoroSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    pomodoro: pomodoroReducer,
  },
});

export default store;
