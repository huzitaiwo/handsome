import { NavLink } from 'react-router-dom'

// styles
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <ul>
        <li><NavLink to='/'></NavLink>Websites</li>
        <li><NavLink to='/'></NavLink>Apps</li>
        <li><NavLink to='/'></NavLink>dApps</li>
      </ul>
    </div>
  )
}
