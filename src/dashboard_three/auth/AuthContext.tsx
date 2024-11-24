import React, { createContext, useContext, useState, useCallback } from 'react';
import { AdminType } from '../dashboard/types';

interface AuthContextType {
  isAuthenticated: boolean;
  adminType: AdminType | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

interface LoginCredentials {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminType, setAdminType] = useState<AdminType | null>(null);

  const login = useCallback(async (credentials: LoginCredentials) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      const data = await response.json();
      setIsAuthenticated(true);
      setAdminType(data.adminType);
    } catch (error) {
      setIsAuthenticated(false);
      setAdminType(null);
      throw error;
    }
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setAdminType(null);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, adminType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};