import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, LoginCredentials, RegisterCredentials } from '../types/user';
import { loginUser, registerUser, uploadVideo } from '../services/auth';

interface AuthStore {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  uploadVideo: (videoData: FormData) => Promise<void>;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      loading: false,
      error: null,
      isAuthenticated: false,

      login: async (credentials) => {
        try {
          set({ loading: true, error: null });
          const user = await loginUser(credentials);
          set({ user, isAuthenticated: true, loading: false });
        } catch (error) {
          set({ error: 'Échec de la connexion', loading: false });
        }
      },

      register: async (credentials) => {
        try {
          set({ loading: true, error: null });
          const user = await registerUser(credentials);
          set({ user, isAuthenticated: true, loading: false });
        } catch (error) {
          set({ error: "Échec de l'inscription", loading: false });
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      uploadVideo: async (videoData) => {
        try {
          set({ loading: true, error: null });
          await uploadVideo(videoData);
          set({ loading: false });
        } catch (error) {
          set({ error: 'Échec du téléchargement', loading: false });
        }
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);