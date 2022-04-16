import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import brand from '../asset/icon/logo.svg'
import hamburger from '../asset/icon/hamburger.svg'
import close from '../asset/icon/close.svg'

// style
import './Navbar.css'

export default function Navbar() {
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
    <nav className='navbar'>
      <div className="container">
        <Link to='/' className="brand">
          <img src={brand} alt="brand" />
          <span>Hussen Taiwo</span>
        </Link>
        {(mobileMenu || screenWidth > 678) && (
          <ul>
            <li className='navbar__links'><Link to='/projects'>Projects</Link></li>
            <li className='navbar__links'><Link to='/resume'>Resume</Link></li>
            <li className='navbar__links hi'><Link to='/contact'>Let's Talk</Link></li>
          </ul>
        )}
        <button className="toggler" onClick={toggleNavigation}>
          {!mobileMenu && <img className='hamburger' src={hamburger} alt="" />}
          {mobileMenu && <img className='close' src={close} alt="" />}
        </button>
      </div>
    </nav>
  )
}
