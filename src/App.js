import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItem from "./Pages/AddItem/AddItem";
import BikeDetail from "./Pages/AddItem/BikeDetail";
import ManageItems from "./Pages/AddItem/MangaeItem";
import MyItem from "./Pages/AddItem/MyItem";
import Blog from "./Pages/Blog/Blog";

import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import Signup from "./Pages/Login/Signup";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="Inventory" element={<Inventory></Inventory>}></Route>
        <Route
          path="manage"
          element={
            <RequireAuth>
              <ManageItems></ManageItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="myitem"
          element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="additem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="bike/:bikeId"
          element={
            <RequireAuth>
              <BikeDetail></BikeDetail>
            </RequireAuth>
          }
        ></Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
