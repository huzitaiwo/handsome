import './Home.css'

// components & pages
import Banner from '../../components/Banner'
import Service from '../../components/Service'
import Contact from '../contact/Contact'

export default function Home() {
  return (
    <div>
      <Banner />
      <Service />
      <Contact />
    </div>
  )
}
