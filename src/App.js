import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import inicio from './paginas/inicio';
import catalogo from './paginas/catalogo';
import carrito  from './paginas/carrito';




function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={inicio}/>
        <Route path='/catalogo' component={catalogo}/>
        <Route path='/carrito' component={carrito}/>
      </Switch>
    </Router>

  );
}

export default App;
