import { NavLink } from 'react-router-dom'

// styles
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='links'>
        <li><NavLink to='/website'>Websites</NavLink></li>
        <li><NavLink to='/apps'>Apps</NavLink></li>
        <li><NavLink to='/dapps'>dApps</NavLink></li>
      </ul>
    </div>
  )
}
