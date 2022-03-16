import './Banner.css'

import linkedin from '../assest/icon/linkedin-brand.svg'
import instagram from '../assest/icon/instagram-brand.svg'
import twitter from '../assest/icon/twitter-brand.svg'

export default function Banner() {
  return (
    <section className='banner'>
      <div className="container">
        <span>&#128075; Welcome!</span>
        <h2>I'm a Frontend Developer and Software Engineer from somewhere</h2>
        <p>I have 3 years of experience of building and developing websites and web applications for various organizations</p>
        <div className="follow">
          <p>Follow me on:</p>
          <ul className='social-links'>
            <li><a href="#"><img src={linkedin} alt="linkedin" /></a></li>
            <li><a href="#"><img src={twitter} alt="" /></a></li>
            <li><a href="#"><img src={instagram} alt="instagram" /></a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
