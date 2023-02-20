import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TinderCards from "./components/TinderCards/TinderCards";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Routes>
          <Route path="/chat" element={<h1>I am the Chat Page!</h1>} />
          <Route
            path="/"
            element={
              <>
                <TinderCards />
                <SwipeButtons />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
