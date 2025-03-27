import { Outlet } from "react-router";
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
