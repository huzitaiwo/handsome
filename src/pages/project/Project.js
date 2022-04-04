import projectManagement from '../../asset/project.png'
import myMovie from '../../asset/mymovie.png'

//styles
import './Project.css'

export default function Project() {
  return (
    <div className='project'>
      <div className="container">
        <div className='project__bar'>
          <div className="projecr__bar-content">
            <ul className='project__links'>
              <li><button className='active'>Websites</button></li>
              <li><button>Apps</button></li>
              <li><button>dApps</button></li>
            </ul>
          </div>
        </div>
        <div className="project__list">
          <img src={myMovie} alt="my movie website" />
          <img src={projectManagement} alt="project management web app" />
        </div>
      </div>
    </div>
  )
}
