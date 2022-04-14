import { useCollection } from '../hooks/useCollection'

// styles
import './Service.css'

export default function Service() {
  const { documents: services, isLoading, error } = useCollection('services')

  if(isLoading) {
    return <h3>Loading...</h3>
  }
  if(error) {
    return <h3>{error}</h3>
  }
  console.log(services)

  return (
    <section className='service'>
      <div className="container">
        <h2>What I do</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque aliquam laboriosam expedita ea architecto!</p>

        <div className="service-list">
          <ul className='service-list__content'>
            {services && services.map(service => (
              <li key={service.id}>
                <img className='service-image' src={service.photoURL} alt={service.title} />
                <div className="content">
                  <h3>{service.title}</h3>
                  <p className='description'>{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
