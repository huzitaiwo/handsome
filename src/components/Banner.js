import './Banner.css'

export default function Banner() {
  return (
    <section className='banner'>
      <div className="container">
        <span>&#128075; Welcome!</span>
        <h2>I'm a Frontend Developer and Software Engineer from somewhere</h2>
        <p>I have 3 years of experience of building and developing websites and web applications for various organizations</p>
        <div className="follow">
          <p>Follow me on:</p>
          <ul>
            {/* <li><a href=""></a></li> */}
          </ul>
        </div>
      </div>
    </section>
  )
}
