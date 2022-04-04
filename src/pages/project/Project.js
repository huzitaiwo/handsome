import projectImage from '../../asset/2hGjmgZrS1nlsEl5PZorn7EsmzH.jpg'

//styles
import './Project.css'

export default function Project() {
  return (
    <div className='project'>
      <div className="container">
        <div className='project__bar'>
          <div className="projecr__bar-content">
            <ul className='project__links'>
              <li><button>Websites</button></li>
              <li><button>Apps</button></li>
              <li><button>dApps</button></li>
            </ul>
          </div>
        </div>
        <div className="project__list">
          <img 
            src={projectImage} alt="placeholder"
            style={{ width: '100%', filter: 'blur(3px)' }}
          />
          <img 
            src={projectImage} alt="placeholder"
            style={{ width: '100%', filter: 'blur(3px)' }}
          />
          <img 
            src={projectImage} alt="placeholder"
            style={{ width: '100%', filter: 'blur(3px)' }}
          />
          <img 
            src={projectImage} alt="placeholder"
            style={{ width: '100%', filter: 'blur(3px)' }}
          />
        </div>
      </div>
    </div>
  )
}
