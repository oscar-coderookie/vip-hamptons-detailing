import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, WhatsappBtn } from "./components";
import {ComingSoon} from './components';
import HomePage from './pages/HomePage/HomePage';
import Portfolio from "./pages/Portfolio/Portfolio";
import BoatDetailing from "./pages/BoatDetailing/BoatDetailing";
import AboutUs from "./pages/AboutUs/AboutUs";

const Layout = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/contact" element={<ComingSoon/>} />
      <Route exact path="/portfolio" element={<Portfolio />} />
      <Route exact path="/portfolio/boats" element={<BoatDetailing/>} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Layout />
        <WhatsappBtn/>
      </div>
    </Router>
  );
}

export default App;
