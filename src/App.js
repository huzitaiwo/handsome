import { BrowserRouter, Route, Switch } from 'react-router-dom'
// styles 
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
