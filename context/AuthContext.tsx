
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Donor, BloodType } from '../types';

interface AuthContextType {
  user: Donor | null;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const MOCK_USER: Donor = {
  id: '#8829-1029',
  name: 'Sarah Jenkins',
  email: 'sarah.j@example.com',
  phone: '+1 (555) 000-0000',
  bloodType: BloodType.OPositive,
  donorSince: '2019',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9-B5NFmTuUj6kzTb9rkuJ1kzyN_ZbVtBoLj0Q27g-MvjpcCet09VNk9IzBpr3wPwszGbqbQhU0zb3j1_jxT-5o-fcvFIDNd6V8RCurg1tKEqpcMqcorfLYwsPjAfdJbafThgpbOqAJBG2qLzcF1LSv2l-bS-oWcaYofeWIj-Z8wG2Wy43uEVoYTf10291oSwB6vh9v00wZLW3z31WAzp78DETdvi0UlED-mjXpvII2QBOPGKgz8geb65hAapxFho5JNV4kE1F8oAS',
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Donor | null>(MOCK_USER);

  const login = (email: string) => {
    // Basic mock login
    setUser(MOCK_USER);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
