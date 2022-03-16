import { Link } from 'react-router-dom'
import brand from '../assest/logo.svg'

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
            <li className='hi'><Link to='/contact'>Let's Talk</Link></li>
        </ul>
      </div>
    </nav>
  )
}
