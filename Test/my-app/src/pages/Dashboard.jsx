import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalPomodoros = tasks.reduce((sum, task) => sum + task.pomodoros, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Task Summary</h2>
          <div className="space-y-2">
            <p>Total Tasks: {tasks.length}</p>
            <p>Completed Tasks: {completedTasks}</p>
            <p>Total Pomodoros: {totalPomodoros}</p>
            <Link 
              to="/tasks"
              className="inline-block mt-4 text-blue-500 hover:text-blue-600"
            >
              View All Tasks →
            </Link>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <Link
              to="/pomodoro"
              className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center"
            >
              Start Pomodoro
            </Link>
            <Link
              to="/tasks"
              className="block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-center"
            >
              Add New Task
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 