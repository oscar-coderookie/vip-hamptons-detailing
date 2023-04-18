import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, WhatsappBtn } from "./components";
import {ComingSoon} from './components';
import HomePage from './pages/HomePage/HomePage';
import Portfolio from "./pages/Portfolio/Portfolio";

const Layout = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/about-us" element={<ComingSoon />} />
      <Route exact path="/contact" element={<ComingSoon/>} />
      <Route exact path="/images" element={<ComingSoon />} />
      <Route exact path="/portfolio" element={<Portfolio />} />
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
