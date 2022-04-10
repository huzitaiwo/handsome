import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCollection } from '../../hooks/useCollection'

//styles
import './Project.css'

export default function Project() {
  const { documents, isLoading, error } = useCollection('projects')
  const [status, setStatus] = useState(0)

  if(isLoading) {
    return <h3>Loading...</h3>
  }
  if(error) {
    return <h3>{error}</h3>
  }

  return (
    <div className='project'>
      <div className="container">
        <div className='project__bar'>
          <div className="project__bar-content">
            <ul className='project__links'>
              <li><button onClick={() => {
                setStatus(0)
              }} className={status === 0 ? 'active' : ''}>Websites</button></li>
              <li><button onClick={() => {
                setStatus(1)
              }} className={status === 1 ? 'active' : ''}>Apps</button></li>
              <li><button onClick={() => {
                setStatus(2)
              }} className={status === 2 ? 'active' : ''}>dApps</button></li>
            </ul>
          </div>
        </div>
        <div className="project__list">
          {projects && projects.map(project => (
            <Link className='project__link' to={`project/${project.id}`} key={project.id}>
              <div className="project__overlay"></div>
              <img src={project.imgURL} alt="my movie website" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
