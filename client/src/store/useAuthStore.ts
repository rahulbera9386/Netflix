import { create } from "zustand";
import { authAPI, axiosInstance } from "../utills/api";

export type User = {
  id: string;
  username: string;
  email: string;
};

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  
  login: async (email: string, password: string) => {
    try {
      const response = await axiosInstance.request({
        ...authAPI.login, 
        data: { email, password },
      });
      
      set({ user: response.data.data, isAuthenticated: true });
    } catch (error) {
      console.error("Login error:", error);
    }
  },
  
  logout: async () => {
    try {
      await axiosInstance.request({
        ...authAPI.logout, 
      });
      set({ user: null, isAuthenticated: false });
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  },
}));
