import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import ProductSec from "./components/ProductSec";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="marg">
        <Home />
        <Skills />
        <ProductSec />
      </div>
    </div>
  );
}

export default App;
