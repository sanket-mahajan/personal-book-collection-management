import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./App.css";
import AllBooks from "./components/allbooks";
import { Search } from "./components/search";
import { ReadStatus } from "./components/read-status";
import { Genres } from "./components/genres";
import { BookProvider } from "./context/bookcontext";
import { Navbar } from "./components/navbar";
function App() {
  return (
    <div className="App">
      <BookProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" Component={AllBooks} />
            <Route path="/search" Component={Search} />
            <Route path="/read-status" Component={ReadStatus} />
            <Route path="/genres" Component={Genres} />
          </Routes>
        </Router>
      </BookProvider>
    </div>
  );
}

export default App;
