import { Link } from 'react-router-dom'

import './Navbar.css'


export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/' className="brand">
        <span>Handsome</span>
      </Link>
      <ul>
        <li><Link to='/project'>Project</Link></li>
        <li><Link to='/contact'>Let's Talk</Link></li>
      </ul>
    </nav>
  )
}
