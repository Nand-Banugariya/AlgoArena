import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from '../contexts/axios';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Restore user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Accept navigate as an argument
  const login = async (email, password, navigate) => {
    setIsLoading(true);
    try {
      const res = await axios.post('/login', { email, password });
      const userObj = {
        id: res.data.userid,
        name: res.data.name,
        email: res.data.email,
        role: res.data.role,
        avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      };
      setUser(userObj);
      // Store user in localStorage for session check in other tabs
      localStorage.setItem('user', JSON.stringify(userObj));
      // Use react-router navigation
      if (navigate) {
        if (res.data.role === 'student') {
          navigate('/student');
        } else if (res.data.role === 'teacher') {
          navigate('/teacher');
        }
      }
    } catch (err) {
      if (err.response && err.response.status === 403) {
        alert(err.response.data.message);
      } else {
        alert('Invalid email or password');
      }
    }
    setIsLoading(false);
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    // Simulate Google OAuth
    await new Promise(resolve => setTimeout(resolve, 1500));
    setUser({
      id: '2',
      name: 'Google User',
      email: 'user@student.edu',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    });
    setIsLoading(false);
  };

  const signup = async (name, email, password) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUser({
      id: '3',
      name,
      email,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    });
    setIsLoading(false);
  };

  const logout = async () => {
    try {
      await axios.post('/logout');
    } catch (err) {
      // Optionally handle error
    }
    setUser(null);
    localStorage.removeItem('user'); // Remove user from localStorage on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, loginWithGoogle, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};