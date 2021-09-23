import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import inicio from './paginas/inicio'
import soporte from './paginas/soporte'
import items from './paginas/items'
import logo from './components/Navbar'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>
    </div>

  );
}

export default App;
