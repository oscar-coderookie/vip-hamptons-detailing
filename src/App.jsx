import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, WhatsappBtn } from "./components";
import {ComingSoon} from './components';
import HomePage from './pages/HomePage/HomePage';
import Portfolio from "./pages/Portfolio/Portfolio";
import BoatDetailing from "./pages/BoatDetailing/BoatDetailing";
import AboutUs from "./pages/AboutUs/AboutUs";
import CarDetailing from "./pages/CarDetailing/CarDetailing";
import ServicesPage from "./pages/ServicesPage/ServicesPage";

const Layout = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/services" element={<ServicesPage/>} />
      <Route exact path="/portfolio" element={<Portfolio />} />
      <Route exact path="/portfolio/boats" element={<BoatDetailing/>} />
      <Route exact path="/portfolio/cars" element={<CarDetailing/>} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Layout />
      </div>
    </Router>
  );
}

export default App;
