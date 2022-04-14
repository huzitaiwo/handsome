import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import brand from '../asset/icon/logo.svg'
import hamburger from '../asset/icon/hamburger.svg'
import close from '../asset/icon/close.svg'

// style
import './Navbar.css'

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(true)

  useEffect(() => {
    if (window.innerWidth <= 678) {
      setMobileMenu(false)
    }
  }, [window.innerWidth])


  return (
    <nav className='navbar'>
      <div className="container">
        <Link to='/' className="brand">
          <img src={brand} alt="brand" />
          <span>Handsome</span>
        </Link>
        {mobileMenu && (
          <ul>
            <li className='navbar__links'><Link to='/projects'>Projects</Link></li>
            <li className='navbar__links'><Link to='/resume'>Resume</Link></li>
            <li className='navbar__links hi'><Link to='/contact'>Let's Talk</Link></li>
          </ul>
        )}
        <div className="toggler">
          {!mobileMenu && <img className='hamburger' src={hamburger} alt="" />}
          {mobileMenu && <img className='close' src={close} alt="" />}
        </div>
      </div>
    </nav>
  )
}
