import { useState } from 'react'
import { useCollection } from '../hooks/useCollection'
// styles
import './Service.css'

export default function Service() {
  const { document: services, isLoading, error } = useCollection('services')

  return (
    <section className='service'>
      <div className="container">
        <h2>What I do</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque aliquam laboriosam expedita ea architecto!</p>

        <div className="service-list">
          <ul className='service-list__content'>
            {services.map(service => (
              <li key={service.id}>
                <img src={thumbnail} alt='placeholder' />
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
