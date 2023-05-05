import { NavLink, Route, Routes } from "react-router-dom";
// import { useDispatch } from "react-redux";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Users } from "./pages/Users/Users";
// import { useEffect } from "react";
// import { fetchUsers } from "./redux/operations";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);

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
