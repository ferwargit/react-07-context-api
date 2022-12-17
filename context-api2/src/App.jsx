import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import ThemeContext from "./context/ContextoGeneral";

function App() {
  return (
    <div className="App">
      <ThemeContext>
        <Home />
        <About />
      </ThemeContext>
    </div>
  );
}

export default App;
