import { Routes, Route } from "react-router-dom";
import Board from "../Pages/Board";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/board" element={<Board />} />
    </Routes>
  );
};

export default RoutesMain;
