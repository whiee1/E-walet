import { getUser } from "./components/users/userSlice";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CardList from "./components/cards/CardList";
import AddCard from "./components/cards/addCard/AddCard";
import { useNavigate, Routes, Route, Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const navigate = useNavigate();

  let onNavigate = (page) => {
    navigate(page);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>E-Wallet</h1>
      </header>

      <Routes>
        <Route path="/addcard" element={<AddCard />} />
        <Route path="/cards" element={<CardList />} />
      </Routes>
    </div>
  );
}

export default App;
