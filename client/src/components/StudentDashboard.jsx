import React from 'react';
import { Outlet } from 'react-router-dom';

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center">
      <Outlet />
    </div>
  );
};

export default StudentDashboard;
