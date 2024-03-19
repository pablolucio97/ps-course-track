import { create } from 'zustand';

type State = {
  isAuthenticated: boolean;
};

type Actions = {
  signIn: () => void;
  signOut: () => void;
};

export const useAuthenticationStore = create<State & Actions>(set => ({
  isAuthenticated: false,
  signIn: () => {
    set({ isAuthenticated: true });
  },
  signOut: () => {
    set({ isAuthenticated: false });
  },
}));
