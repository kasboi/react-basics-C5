import { Outlet } from "react-router";
import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Content */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
