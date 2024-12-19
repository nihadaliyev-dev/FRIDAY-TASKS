import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link
                to="/"
                className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Dashboard
              </Link>
              <Link
                to="/pomodoro"
                className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Pomodoro
              </Link>
              <Link
                to="/tasks"
                className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Tasks
              </Link>
              <Link
                to="/settings"
                className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Settings
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
};

export default Layout;
