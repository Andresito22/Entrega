import './App.css';
import Navbar from './components/Navbar'
import Saludo from './components/ItemListContainer'

import Contador from './components/itemCount';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Saludo/>
      <Contador/>
    </div>

  );
}

export default App;
