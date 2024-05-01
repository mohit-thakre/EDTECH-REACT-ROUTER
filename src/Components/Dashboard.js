import React from "react";
import { GiBookmarklet, GiGraduateCap, GiSettingsKnobs } from "react-icons/gi";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-white">
        Welcome to Your Dashboard
      </h2>
      <p className="text-lg text-gray-400 mb-8 text-center ">
        Let's make learning an adventure!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-10 flex items-center">
          <GiGraduateCap className="text-5xl text-blue-500 mr-4" />
          <div>
            <h3 className="text-xl font-semibold mb-2">My Courses</h3>
            <p className="text-gray-700">
              Track your progress and continue learning where you left off.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-10 flex items-center">
          <GiBookmarklet className="text-5xl text-green-500 mr-4" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Bookmarks</h3>
            <p className="text-gray-700">
              Keep track of your favorite courses and resources for quick
              access.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-10 flex items-center">
          <GiSettingsKnobs className="text-5xl text-purple-500 mr-4" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Settings</h3>
            <p className="text-gray-700">
              Customize your learning experience and manage your account
              settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
