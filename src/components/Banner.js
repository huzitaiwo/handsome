import './Banner.css'

import linkedin from '../assest/icon/linkedin-brand.svg'
import github from '../assest/icon/github-brand.svg'
import instagram from '../assest/icon/instagram-brand.svg'
import twitter from '../assest/icon/twitter-brand.svg'

export default function Banner() {
  return (
    <section className='banner'>
      <div className="container">
        <span>&#128075; Welcome!</span>
        <h2>I'm a Frontend Developer and Software Engineer from somewhere</h2>
        <p>I have <small>2 years</small> of experience of creating functional high-performing, content-driven, optimized websites and web applications.</p>
        <div className="follow">
          <p>Follow me on:</p>
          <ul className='social-links'>
            <li><a href="https://google.com"><img src={github} alt="instagram" /></a></li>
            <li><a href="https://google.com"><img src={linkedin} alt="linkedin" /></a></li>
            <li><a href="https://google.com"><img src={twitter} alt="twitter" /></a></li>
            <li><a href="https://google.com"><img src={instagram} alt="instagram" /></a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
