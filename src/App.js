// CSS
import "./App.css";
// PAGES
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contacto from "./pages/Contacto/Contacto";
import ProductDetail from "./pages/Detail/ProductDetail";
import Category from "./components/Container/Categorys/Category";
// REACT-ROUTER-DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// COMPONENTS
import Navbar from "./components/NavBar/NavBar";
import Message404 from "./components/Message-404/message404";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Container/Cart/Cart";


function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contacto" component={Contacto} />
            <Route path="/cart" component={Cart} />
            <Route path="/:category/:id" component={ProductDetail} />
            <Route path="/:category" component={Category} />
            <Route path="*" component={Message404} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
