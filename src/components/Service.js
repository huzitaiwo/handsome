import { useFetch } from '../hooks/useFetch'
// styles
import './Service.css'

export default function Service() {
  const url = 'http://localhost:5000/services';
  const { isLoading, error, data } = useFetch(url)
  console.log(data)


  return (
    <section className='service'>
      <h2>What I do</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque aliquam laboriosam expedita ea architecto!</p>

      <div className="service-list">
        
      </div>
    </section>
  )
}
