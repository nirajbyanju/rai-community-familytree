import create from 'zustand';
import { fetchMenus, fetchFooterMenu, fetchImportantLink } from '@/api/menuApi';

export const useMenuStore = create((set) => ({
  menus: [],
  setMenus: (menus) => set({ menus }),
  fetchAndSetMenus: async () => {
    try {
      const data = await fetchMenus();
      set({ menus: data });
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  },
}));

export const useFooterMenuStore = create((set) => ({
  footerMenu: [],
  setFooterMenu: (footerMenu) => set({ footerMenu }),
  fetchAndSetFooterMenu: async () => {
    try {
      const data = await fetchFooterMenu();
      set({ footerMenu: data });
    } catch (error) {
      console.error('Error fetching footerMenu:', error);
    }
  },
}));

export const useImportantLinkStore = create((set) => ({
  importantLinkMenu: [],
  setImportantLink: (importantLinkMenu) => set({ importantLinkMenu }),
  fetchAndSetImportantLink: async () => {
    try {
      const data = await fetchImportantLink();
      set({ importantLinkMenu: data });
    } catch (error) {
      console.error('Error fetching importantLinkMenu:', error);
    }
  },
}));
