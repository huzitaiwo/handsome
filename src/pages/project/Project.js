import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

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
  const [projects, setProjects] = useState([
    {
      "id": "2MDAF7DBVnsAqM4LCSyq",
      "name": "Real Estate Website",
      "description": "Donec ultrices tincidunt arcu non sodales neque sodales ut. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Eleifend donec pretium vulputate sapien nec. Dignissim enim sit amet venenatis urna. Nibh venenatis cras sed felis eget. Sit amet cursus sit amet dictum sit amet. Morbi tristique senectus et netus et malesuada fames ac. Nulla at volutpat diam ut venenatis. Ornare massa eget egestas purus viverra accumsan in. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Metus aliquam eleifend mi in nulla posuere. Sed sed risus pretium quam vulputate dignissim",
      "category": "web development",
      "imgURL": fundo,
      "year": 2021,
      "clientName": "Warwick",
      "images": [fundo, fundo, fundo, fundo]
    },
    {
      "id": "T2st20GoqItaYRtbVurr",
      "name": "Movie Application",
      "description": "Lectus urna duis convallis convallis tellus. Malesuada pellentesque elit eget gravida cum. Phasellus vestibulum lorem sed risus ultricies tristique. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Aliquet enim tortor at auctor urna. Eros in cursus turpis massa tincidunt. Proin sagittis nisl rhoncus mattis rhoncus. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Sit amet aliquam id diam maecenas ultricies mi eget. Pretium viverra suspendisse potenti nullam ac tortor",
      "category": "web development",
      "imgURL": myMovie,
      "year": 2022,
      "clientName": "Warwick",
      "images": [myMovie, myMovie, myMovie, myMovie]
    },
    {
      "id": "R9IR0R7lYgCNS2cfP1kO",
      "name": "Github profile",
      "description": "Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Ac tortor vitae purus faucibus. Sollicitudin tempor id eu nisl nunc. Nibh nisl condimentum id venenatis a. Viverra nam libero justo laoreet sit amet cursus sit amet. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Ullamcorper eget nulla facilisi etiam dignissim. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum",
      "imgURL": github,
      "year": 2022,
      "clientName": "Warwick",
      "images": [github, github, github, github]
    },
    {
      "id": "S1Jpg8eWBSwXZR8nJuV2",
      "name": "Website Builder",
      "description": "Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Ullamcorper eget nulla facilisi etiam dignissim. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. At varius vel pharetra vel turpis nunc eget lorem dolor. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Mi quis hendrerit dolor magna eget. Sapien faucibus et molestie ac feugiat sed. Velit aliquet sagittis id consectetur",
      "category": "web development",
      "imgURL": huffle,
      "year": 2021,
      "clientName": "Warwick",
      "images": [huffle, huffle, huffle, huffle]
    },
    {
      "id": "ypITW9HxBfEGDtD3RtLx",
      "name": "Software Monitoring App",
      "description": "Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Ullamcorper eget nulla facilisi etiam dignissim. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. At varius vel pharetra vel turpis nunc eget lorem dolor. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Mi quis hendrerit dolor magna eget. Sapien faucibus et molestie ac feugiat sed. Velit aliquet sagittis id consectetur",
      "category": "web development",
      "imgURL": zulie,
      "year": 2021,
      "clientName": "Warwick",
      "images": [zulie, zulie, zulie, zulie]
    }
  ])

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

  const [status, setStatus] = useState(0)

  // const { data, error, isLoading} = useFetch('http://localhost:9000/projects')
  // console.log(data)

  return (
    <div className='project'>
      <div className="container">
        <div className='project__bar'>
          <div className="project__bar-content">
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
