import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import { selectUserName } from "./features/user/UserSlice";
import Detail from "./components/Detail";

function App() {
  const name = useSelector(selectUserName);
  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path='/'
          element={<Login />}
        />
        <Route path='/home' element={<Home />} />
        <Route
          path='/detail/:id'
          element={<Detail />}
        />
      </Routes>
    </>
  );
}

export default App;
