import { useParams } from 'react-router-dom'
import arrowRight from '../../asset/icon/arrow-right.svg'
import { useDocument } from '../../hooks/useDocument'
import { useTheme } from '../../hooks/useTheme'

// styles
import './ProjectDetails.css'

export default function ProjectDetails() {
  const { mode } = useTheme()

  const { id } = useParams()
  const { document: project, isLoading, error } = useDocument('projects', id)

  if(isLoading) {
    return <h3>Loading...</h3>
  }
  if(error) {
    return <h3>{error}</h3>
  }

  return (
    <div className='project-details'>
      {project && (
        <>
          <section>
            <div className="container">
              <h1 className="project-heading">{project.name}</h1>
              <p className={`project-heading secondary ${mode}`}>{project.type}</p>
            </div>
            <img src={project.photoURL} alt={project.name} className="project-main-image" />
          </section>
          <section>
            <div className="container">
              <div className="project-grid">
                <div className="project-information">
                  <p className="project-label">Designed by</p>
                  <p className={`project-text ${mode}`}>{project.clientName}</p>
                  <p className="project-label">Project type</p>
                  <p className={`project-text ${mode}`}>{project.type}</p>
                  <p className="project-label">Project year</p>
                  <p className={`project-text ${mode}`}>{project.year}</p>
                  <p className="project-label">Technologies</p>
                  <ul className='project-tools'>
                    {project.tools && project.tools.map((tool, i) => (
                      <li key={i}>{tool}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-description">
                  <h2>{project.descriptionTitle}</h2>
                  <p className={mode}>{project.description}</p>
                  <a className="project-link btn" href={project.URL} target="_blank" rel="noreferrer">View project <img src={arrowRight} alt="visit website" /></a>
                </div> 
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
