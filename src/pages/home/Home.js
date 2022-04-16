import './Home.css'

// components & pages
import Banner from '../../components/Banner'
import Service from '../../components/Service'
import Contact from '../contact/Contact'
import ThemeSelector from '../../components/ThemeSelector'

export default function Home() {
  return (
    <div className='home'>
      <ThemeSelector />
      <Banner />
      <Service />
      <Contact />
    </div>
  )
}
