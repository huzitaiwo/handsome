import { Link } from 'react-router-dom'
import brand from '../assest/icon/logo.svg'
import hamburger from '../assest/icon/hamburger.svg'
// import close from '../assest/icon/close.svg'

// style
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className="container">
        <Link to='/' className="brand">
          <img src={brand} alt="brand" />
          <span>Handsome</span>
        </Link>
        <ul>
          <li><Link to='/project'>Project</Link></li>
          <li><Link to='/resume'>Resume</Link></li>
          <li className='hi'><Link to='/contact'>Let's Talk</Link></li>
        </ul>
        <div className="toggler">
          <img className='hamburger' src={hamburger} alt="" />
          {/* <img className='close' src={close} alt="" /> */}
        </div>
      </div>
    </nav>
  )
}
