// src/presentation/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { FirebaseAuthRepository } from '../../infrastructure/firebase/FirebaseAuthRepository';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const unsubscribe = FirebaseAuthRepository.onAuthChange((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    setAuthError(null);
    await FirebaseAuthRepository.login(email, password);
  };

  const register = async (email, password) => {
    setAuthError(null);
    await FirebaseAuthRepository.register(email, password);
  };

  const logout = () => FirebaseAuthRepository.logout();

  const value = { currentUser, login, register, logout, loading, authError, setAuthError };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
