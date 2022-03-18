import { useFetch } from '../hooks/useFetch'
// styles
import './Service.css'

export default function Service() {
  const url = 'http://localhost:5000/services';
  const { isLoading, error, data: services } = useFetch(url)


  return (
    <section className='service'>
      <div className="container">
        <h2>What I do</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque aliquam laboriosam expedita ea architecto!</p>

        <div className="service-list">
          {error && <h3>{error}</h3>}
          {isLoading && <h3>loading...</h3>}
          {services && services.map(service => (
            <div key={service.id}>
              <div className='title'>
                <h3>{service.title}</h3>
              </div>
              <p className='description'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
