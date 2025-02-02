import { create } from "zustand";
import { persist } from "zustand/middleware";

import axios from "axios";
import { authAPI, axiosInstance } from "../utills/api.js";




export const useAuthStore = create()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      error: null,

      login: async (email, password) => {
        try {
          set({ error: null });
          const response = await axiosInstance({
            ...authAPI.login,
            data: { email, password },
          });
          console.log(response);

          set({ user: response.data.data, isAuthenticated: true, error: null });
          return true;
        } catch (error) {
          console.error("Login error:", error);

          if (axios.isAxiosError(error)) {
            set({ error: error?.response?.data?.message });
          }

          return false;
        }
      },

      logout: async () => {
        try {
          await axiosInstance({
            ...authAPI.logout,
          });
          set({ user: null, isAuthenticated: false });
        } catch (error) {
          console.error("Logout error:", error);
          throw error;
        }
      },
    }),
    {
      name: "auth-store", 
      partialize: (state) => ({ user: state.user }),
    }
  )
);
