
import {createContext, useContext, useState, ReactNode} from 'react'

type AppState = {
    isOpen: boolean;
    toggleOpen: () => void;
    NAV_LINKS:
      {
      href: string,
      key: string,
      label: string
      }[];
      ProjectsGallery:
      {

        id: number,
        title: string,
        description: string,
        image: string,
        link: string
      }[]
}
const AppContext = createContext<AppState | undefined>(undefined);
type AppProviderProps = {
  children: ReactNode
}
 export const AppProvider = ({children}: AppProviderProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => {
        setIsOpen(prev => !prev)
    }
  return (
    <AppContext.Provider value={{isOpen, toggleOpen, NAV_LINKS, ProjectsGallery}}>
       {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext (AppContext);
  if(!context) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context;
};

 
export const NAV_LINKS = [
    {href: '/', key: 'about', label: 'About'},
    {href: '/projects', key: 'projects', label: 'Projects'},
    {href: '/contact', key: 'contact', label: 'Contact'},
]

export const ProjectsGallery = [
    {
        id: 1,
        title: 'xxx xxx App',
        description: 'A web app xxxxxxxxxx xxxxxxxx xxxxx xxxxxxxx',
        image: '/img-1.png',
        link: '#'
    },
    {
     id: 2,
     title: 'xxxxxx xxxxxx',
     description: 'xxxxxx xxxxxx xxxxxxx xxxxxxx xxxxxx xxxx',
     image: '/img-2.png',
     link: '#'
    },
    {
        id: 3,
        title: 'Portfolio Website',
        description: 'xxxxxx xxxx xxxxxx xxxxxx  xxxxxxx xxxxxxx',
        image: '/img-1.png',
        link: '#'
    },

]




