import { useState } from 'react'
import { Link } from 'react-router-dom'

// images
import projectManagement from '../../asset/images/project.png'
import github from '../../asset/images/githubprofile.png'
import myMovie from '../../asset/images/mymovie.png'
import huffle from '../../asset/images/huffle.png'
import zulie from '../../asset/images/zulie.png'
import fundo from '../../asset/images/fundo.png'

//styles
import './Project.css'

export default function Project() {
  const apps = [
    { id: 1, image: projectManagement },
    { id: 2, image: projectManagement }
  ]
  const websites = [
    { id: 3, image: myMovie },
    { id: 4, image: github },
    { id: 6, image: fundo },
    { id: 6, image: zulie },
    { id: 7, image: huffle }
  ]

  const [projects, setProjects] = useState(websites)
  const [status, setStatus] = useState(0)

  return (
    <div className='project'>
      <div className="container">
        <div className='project__bar'>
          <div className="projecr__bar-content">
            <ul className='project__links'>
              <li><button onClick={() => {
                setProjects(websites)
                setStatus(0)
                }} className={status === 0 ? 'active' : ''}>Websites</button></li>
              <li><button onClick={() => {
                setProjects(apps)
                setStatus(1)
                }} className={status === 1 ? 'active' : ''}>Apps</button></li>
              <li><button onClick={() => {
                setProjects([])
                setStatus(2)
                }} className={status === 2 ? 'active' : ''}>dApps</button></li>
            </ul>
          </div>
        </div>
        <div className="project__list">
          {projects && projects.map(project => (
            <Link className='project__link' to={`project/${project.id}`}key={project.id}>
              <img src={project.image} alt="my movie website" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
