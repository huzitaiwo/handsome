import { useState } from 'react'
import Url from '../asset/2hGjmgZrS1nlsEl5PZorn7EsmzH.jpg'
// styles
import './Service.css'

export default function Service() {
  const [services] = useState(
    [
      {
        "id": "1",
        "title": "Web Design and Development",
        "description": "Nunc eleifend tristique nunc vel ultricies. Sed interdum nisi dignissim mi tristique, sed cursus arcu feugiat. Mauris ex nisi, ullamcorper et eros et, aliquet placerat ex. Nam metus urna, feugiat ac libero vitae."
      },
      {
        "id": "2",
        "title": "Web3.0 and Blockhain Development",
        "description": "Etiam vel ante risus. Integer ultrices egestas lacus id faucibus. Suspendisse eleifend nibh eu faucibus consectetur. Etiam ut mi tristique, dignissim sem in, vestibulum dui. Aliquam tempor facilisis tortor a fermentum."
      },
      {
        "id": "3",
        "title": "Webflow magic",
        "description": "Aliquam non enim efficitur, feugiat urna quis, placerat ex. Cras risus lorem, placerat vitae hendrerit non, elementum at mi. Nam massa nunc, pharetra bibendum massa et, pellentesque pharetra risus."
      }
    ]
  )

  return (
    <section className='service'>
      <div className="container">
        <h2>What I do</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque aliquam laboriosam expedita ea architecto!</p>

        <div className="service-list">
          <ul className='service-list__content'>
            {services.map(service => (
              <li key={service.id}>
                <img src={Url} alt='placeholder' style={{ filter: 'blur(5px)' }} />
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
