import { createContext } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  return(
    <ThemeContext.Provider value={{ color: '#ae9ce9'}}>
      {children}
    </ThemeContext.Provider>
  )
}