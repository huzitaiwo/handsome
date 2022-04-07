import { useState } from 'react'

// images
import projectManagement from '../../asset/images/project.png'
import myMovie from '../../asset/images/mymovie.png'
import zulie from '../../asset/images/zulie.png'
import huffle from '../../asset/images/huffle.png'
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
    { id: 4, image: fundo },
    { id: 5, image: zulie },
    { id: 6, image: huffle }
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
            <img key={project.id} src={project.image} alt="my movie website" />
          ))}
          {/* <img src={myMovie} alt="my movie website" />
          <img src={projectManagement} alt="project management web app" /> */}
        </div>
      </div>
    </div>
  )
}
