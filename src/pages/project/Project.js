import { useState } from 'react'

// images
import projectManagement from '../../asset/project.png'
import myMovie from '../../asset/mymovie.png'

//styles
import './Project.css'

export default function Project() {
  const apps = [
    { id: 1, image: projectManagement },
    { id: 2, image: projectManagement }
  ]
  const websites = [
    { id: 1, image: myMovie },
    { id: 2, image: myMovie }
  ]

  const [projects, setProjects] = useState(websites)
  // console.log(projects, websites)

  return (
    <div className='project'>
      <div className="container">
        <div className='project__bar'>
          <div className="projecr__bar-content">
            <ul className='project__links'>
              <li><button className={projects === websites ? 'active' : ''} onClick={() => setProjects(websites)}>Websites</button></li>
              <li><button className={projects === apps ? 'active' : ''} onClick={() => setProjects(apps)}>Apps</button></li>
              <li><button className={projects === '' ? 'active' : ''} onClick={() => setProjects([])}>dApps</button></li>
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
