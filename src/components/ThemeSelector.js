import { useTheme } from "../hooks/useTheme"

// styles and images
import './ThemeSelector.css'
import darkMode from '../asset/icon/dark.svg'
import lightMode from '../asset/icon/light.svg'

export default function ThemeSelector() {
  const {mode, changeMode} = useTheme()

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }
  console.log(mode)
     
  return (
    <div className='theme-selector'>
      <button onClick={toggleMode} className="mode-toggler">
        {mode === 'light' && <img src={darkMode} alt="dark mode toggler" />}
        {mode === 'dark' && <img src={lightMode} alt="light mode toggler" />}
      </button>
    </div>
  )
}
