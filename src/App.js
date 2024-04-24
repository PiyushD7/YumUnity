import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
    <NavBar/>
    <div className="container main">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/about" element={<About />} />
      <Route path="/settings" element={<Settings />} />

      </Routes>
    </div>
      <Footer />
    </Router>
   )
}

export default App;
