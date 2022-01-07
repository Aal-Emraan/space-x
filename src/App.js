import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Header/Header";
import MainComponent from "./Pages/Header/MainComponent/MainComponent";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <Header />
        <MainComponent />
      </div>
    </div>
  );
}

export default App;
