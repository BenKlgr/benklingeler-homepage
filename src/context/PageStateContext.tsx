import { createContext } from 'react';

type PageStateContextType = {
  contact: boolean;
  projects: boolean;
  setContact: any;
  setProjects: any;
};
export const PageStateContext = createContext<PageStateContextType>({
  contact: false,
  projects: false,
  setContact: null,
  setProjects: null,
});
