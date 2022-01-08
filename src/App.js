import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Header/Header";
import MainComponent from "./Pages/MainComponent/MainComponent";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div id="container" className="p-5">
        <Header />
        <MainComponent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
