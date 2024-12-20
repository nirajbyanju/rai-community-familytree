import create from 'zustand';
import { fetchConfig } from '@/api/configApi';

export const useConfigStore = create((set) => ({
  config: [],
  setConfig: (config) => set({ config }),
  fetchAndSetConfig: async () => {
    try {
      const data = await fetchConfig();
      set({ config: data});
    } catch (error) {
      console.error('Error fetching config:', error);
    }
  },
}));