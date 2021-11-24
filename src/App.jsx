import { useState } from "react";
import Navbar from "./components/Navbar";
import Headlines from "./components/Headlines";
import Topics from "./components/Topics";
import PageTitle from "./components/PageTitle";
import Article from "./components/Article";
import ArticlesByTopics from "./components/ArticlesByTopics";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";

import UserContext from "./context/User.Context";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Topics />
        <Routes>
          <Route path="/" element={<Headlines />} />
          <Route path="/article/:articleID" element={<Article />} />
          <Route path="/topics/:topic" element={<ArticlesByTopics />} />
          <Route path="/user/login" element={<LoginPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
