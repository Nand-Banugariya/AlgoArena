import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Challenges from './components/Challenges';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';

function AppRoutes() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Hero />
          <Features />
          <Challenges />
          <Leaderboard />
        </>
      } />
      <Route path="/student" element={user?.role === 'student' ? <StudentDashboard /> : <Navigate to="/" />} />
      <Route path="/teacher" element={user?.role === 'teacher' ? <TeacherDashboard /> : <Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <main>
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;