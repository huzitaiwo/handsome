import { useParams } from 'react-router-dom'
import arrowRight from '../../asset/icon/arrow-right.svg'
import { useFetch } from '../../hooks/useFetch'

// styles
import './ProjectDetails.css'

const path = '../../asset/images'

export default function ProjectDetails() {
  const { id } = useParams()
  const {data: project, error, isLoading} = useFetch('http://localhost:9000/projects/' + id)

  return (
    <div className='project-details'>
      <section>
        <div className="container">
          <h1 className="project-heading">{project.name}</h1>
          <p className="project-heading secondary">{project.category}</p>
        </div>
        <img src={path + project.imgURL} alt={project.name} className="project-main-image" />
      </section>
      <section>
        <div className="container">
          <div className="project-grid">
            <div className="project-information">
              <p className="project-label">Client</p>
              <p className="project-text">{project.clientName}</p>
              <p className="project-label">Project type</p>
              <p className="project-text">{project.category}</p>
              <p className="project-label">Project year</p>
              <p className="project-text">{project.year}</p>
            </div>
            <div className="project-description">
              <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
              <p>{project.description}</p>
              <a className="project-link btn" href="https://edieweb.netlify.app" target="_blank">View project <img src={arrowRight} alt="avist website icon" /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
