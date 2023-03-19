import "./App.css";
import Home from "./Screens/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import PlayStation from './components/PlayStation5';
import PlayStation5 from "./components/PlayStation5";
function App() {
  return (
    <div className="mainn">
        <Navbar />
        <PlayStation5 />
        <Footer />
    </div>
  );
}

export default App;
