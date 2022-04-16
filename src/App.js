import { BrowserRouter, Route, Switch } from 'react-router-dom'

// styles 
import './App.css'

// pages & components
import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import Project from './pages/project/Project'
import Contact from './pages/contact/Contact'
import ProjectDetails from './pages/Projects/ProjectDetails'
import Resume from './pages/Resume'
import { useTheme } from './hooks/useTheme'

function App() {
  const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/projects'>
              <Project />
            </Route>
            <Route path='/project/:id'>
              <ProjectDetails />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/resume'>
              <Resume />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App
