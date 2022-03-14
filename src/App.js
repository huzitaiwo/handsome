import { BrowserRouter, Route, Switch } from 'react-router-dom'

// styles 
import './App.css'

// pages & components
import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import Project from './pages/project/Project'

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
