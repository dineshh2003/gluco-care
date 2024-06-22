// src/types/auth.ts

export interface AuthState {
    isAuthenticated: boolean;
    user: any; // Replace 'any' with the actual type of user object
    login: () => void;
    logout: () => void;
    isLoading: boolean;
  }
  