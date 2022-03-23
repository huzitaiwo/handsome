import { useFetch } from '../hooks/useFetch'
import Url from '../asset/src/2hGjmgZrS1nlsEl5PZorn7EsmzH.jpg'
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
          <ul className='service-list__content'>
            {services && services.map(service => (
              <li key={service.id}>
                <img src={Url} alt={Url} />
                <h3>{service.title}</h3>
                <p className='description'>{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
