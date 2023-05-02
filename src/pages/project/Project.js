import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCollection } from '../../hooks/useCollection'
import { useTheme } from '../../hooks/useTheme'

//styles
import './Project.css'

export default function Project() {
  const { mode } = useTheme()

  const { documents: projects, isLoading, error } = useCollection('projects')
  const [status, setStatus] = useState("website")

  // const projectsInProgress = projects ? projects.filter(document => {
  //   let progress = false
  //   if (document.inProgress) {
  //     progress = true
  //   }
  //   return progress
  // }) : null

  const websiteProjects = projects ? projects.filter(project => {
    let category = false
    if (project.category === 'website') {
      category = true
    }
    return category
  }) : null

  const appProjects = projects ? projects.filter(project => {
    let category = false
    if (project.category === 'app') {
      category = true
    }
    return category
  }) : null

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
            <ul className={`project__links ${mode}`}>
              <li><button onClick={() => {
                setStatus("website")
              }} className={status === "website" ? "active" : ''}>Websites</button></li>
              <li><button onClick={() => {
                setStatus("app")
              }} className={status === "app" ? "active" : ''}>Apps</button></li>
            </ul>
          </div>
        </div>
        <div className="project__list">
          {projects && (
            <>
              {status === 'website' && (
                <div>
                {websiteProjects.map(project => (
                  <Link className='project__link' to={`project/${project.id}`} key={project.id}>
                    <div className="project__overlay"></div>
                    <img src={project.photoURL} alt="website thumbnail" />
                  </Link>
                ))}
              </div>  
              )}

              {status === 'app' && (
                <div>
                {appProjects.map(project => (
                  <Link className='project__link' to={`project/${project.id}`} key={project.id}>
                    <div className="project__overlay"></div>
                    <img src={project.photoURL} alt="website thumbnail" />
                  </Link>
                ))}
              </div>  
              )}          
            </>
          )}
        </div>
      </div>
    </div>
  )
}
