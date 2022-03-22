import { BrowserRouter, Route, Switch } from 'react-router-dom'

// styles 
import './App.css'

// pages & components
import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import Project from './pages/project/Project'
import Contact from './pages/contact/Contact'
import Website from './pages/project/Website'
import Apps from './pages/project/Apps'
import Dapps from './pages/project/Dapps'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/project'>
            <Project />
          </Route>
          <Route path='/website'>
            <Website />
          </Route>
          <Route path='/apps'>
            <Apps />
          </Route>
          <Route path='/dapps'>
            <Dapps />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
