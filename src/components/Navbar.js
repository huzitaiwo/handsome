import { useState } from 'react'
import { Link } from 'react-router-dom'
import brand from '../asset/icon/logo.svg'
import hamburger from '../asset/icon/hamburger.svg'
import close from '../asset/icon/close.svg'

// style
import './Navbar.css'

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(true)

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
          <img className='hamburger' src={hamburger} alt="" />
          <img className='close' src={close} alt="" />
        </div>
      </div>
    </nav>
  )
}
