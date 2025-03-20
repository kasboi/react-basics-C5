import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Content */}
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
