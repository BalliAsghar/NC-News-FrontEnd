import { useState } from "react";
import Navbar from "./components/Navbar";
import Headlines from "./components/Headlines";
import Topics from "./components/Topics";
import PageTitle from "./components/PageTitle";
import Article from "./components/Article";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "./context/User.Context";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <PageTitle />
        <Topics />
        <Routes>
          <Route path="/" element={<Headlines />} />
          <Route path="/article/:articleID" element={<Article />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
