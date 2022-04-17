import { useState, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'
import { Link } from 'react-router-dom'


// style and images
import './Navbar.css'
import brand from '../asset/icon/logo.svg'
import hamburger from '../asset/icon/hamburger.svg'
import hamburgerDark from '../asset/icon/hamburger_dark.svg'
import close from '../asset/icon/close.svg'
import closeDark from '../asset/icon/close_dark.svg'

export default function Navbar() {
  const { mode } = useTheme()
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleNavigation = () => {
    setMobileMenu(!mobileMenu)
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    // cleanup function
    return () => {
      window.removeEventListener('resize', changeWidth)
    }


  }, [])

  return (
    <nav className={`navbar ${mode}`}>
      <div className="container">
        <Link to='/' className="brand">
          <img src={brand} alt="brand" />
          <span className={mode}>Hussen Taiwo</span>
        </Link>
        {(mobileMenu || screenWidth > 678) && (
          <ul className={mode} onClick={() => setMobileMenu(false)}>
            <li className='navbar__links'><Link className={mode} to='/projects'>Projects</Link></li>
            <li className='navbar__links'><Link className={mode} to='/resume'>Resume</Link></li>
            <li className={`navbar__links ${mode}`}><Link className={`hi ${mode}`} to='/contact'>Let's Talk</Link></li>
          </ul>
        )}
        <button className="toggler" onClick={toggleNavigation}>
          {!mobileMenu && (
            <>
             {mode === 'light' && <img className='hamburger' src={hamburgerDark} alt="" />}
             {mode === 'dark' && <img className='hamburger' src={hamburger} alt="" />}
            </>
          )}
          {mobileMenu && (
            <>
             {mode === 'light' && <img className='close' src={closeDark} alt="" />}
             {mode === 'dark' && <img className='close' src={close} alt="" />}
            </>
          )}
        </button>
      </div>
    </nav>
  )
}
