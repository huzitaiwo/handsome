import { useParams } from 'react-router-dom'

// styles
import './ProjectDetails.css'

export default function ProjectDetails() {
    const { id } = useParams()

  return (
    <div>ProjectDetails - {id}</div>
  )
}
