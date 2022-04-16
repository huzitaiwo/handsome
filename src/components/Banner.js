import { useTheme } from '../hooks/useTheme'

// styles
import './Banner.css'

// images
import linkedin from '../asset/icon/linkedin-brand.svg'
import github from '../asset/icon/github-brand.svg'
import instagram from '../asset/icon/instagram-brand.svg'
import twitter from '../asset/icon/twitter-brand.svg'
import bannerThumbnail from '../asset/images/web_development.png'

export default function Banner() {
  const { color, changeColor } = useTheme()

  return (
    <section onClick={() => changeColor('#9ce9df')} className='banner' style={{ background: color }}>
      <div className="container">
        <div className="container__content">
          <span>&#128075; Welcome!</span>
          <h2>I'm a Frontend Developer and Software Engineer from Nigeria</h2>
          <p>I have <small>2 years</small> of experience in creating functional high-performing, content-driven, optimized websites and web applications.</p>
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
        <img className='banner-thumbnail' src={bannerThumbnail} alt="banner thumbnail" />
      </div>
    </section>
  )
}
