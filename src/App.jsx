import { useState } from "react";
import Navbar from "./components/Navbar";
import Headlines from "./components/Headlines";
import Topics from "./components/Topics";
import PageTitle from "./components/PageTitle";
import Article from "./components/Article";
import ArticlesByTopics from "./components/ArticlesByTopics";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "./context/User.Context";

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
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
