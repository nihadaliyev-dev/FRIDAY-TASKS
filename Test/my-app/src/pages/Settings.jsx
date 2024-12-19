import { useDispatch, useSelector } from "react-redux";
import {
  updateWorkDuration,
  updateBreakDuration,
} from "../store/pomodoroSlice";
import toast from "react-hot-toast";

const Settings = () => {
  const dispatch = useDispatch();
  const { workDuration, breakDuration } = useSelector(
    (state) => state.pomodoro
  );

  const handleWorkDurationChange = (minutes) => {
    dispatch(updateWorkDuration(minutes));
    toast.success("Work duration updated!");
  };

  const handleBreakDurationChange = (minutes) => {
    dispatch(updateBreakDuration(minutes));
    toast.success("Break duration updated!");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Pomodoro Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Work Duration (minutes)
              </label>
              <input
                type="number"
                min="1"
                max="60"
                value={workDuration / 60}
                onChange={(e) =>
                  handleWorkDurationChange(parseInt(e.target.value))
                }
                className="w-full px-4 py-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Break Duration (minutes)
              </label>
              <input
                type="number"
                min="1"
                max="30"
                value={breakDuration / 60}
                onChange={(e) =>
                  handleBreakDurationChange(parseInt(e.target.value))
                }
                className="w-full px-4 py-2 border rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
