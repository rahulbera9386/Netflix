import { create } from "zustand";
import { authAPI, axiosInstance } from "../utills/api";
import axios from "axios";


export type User = {
  id: string;
  username: string;
  email: string;
};

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error:string | null
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  error:null,
  
  login: async (email: string, password: string) => {
   
    try {
      set({error:null})
      const response = await axiosInstance.request({
        ...authAPI.login, 
        data: { email, password },
      });
      console.log(response)
      
      
      set({ user: response.data.data, isAuthenticated: true,error:null });
      return true
    } catch (error) {
      console.error("Login error:", error);
      
      if (axios.isAxiosError(error)) {
        set({error:error?.response?.data?.message })
      }
      
      return false
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
