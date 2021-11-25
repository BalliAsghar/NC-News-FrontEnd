import { useState } from "react";
import Navbar from "./components/Navbar";
import Headlines from "./components/Headlines";
import Article from "./components/Article";
import ArticlesByTopics from "./components/ArticlesByTopics";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";

import UserContext from "./context/User.Context";

function App() {
  const [user, setUser] = useState({});
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />

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
