import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Users } from "./pages/Users/Users";

function App() {
  return (
    <>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
