
import React from "react"
import { RecoilRoot } from "recoil"
import "../src/styles/input.css"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

import List from "./components/List"
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path="/" element={<List />}></Route>
          </Routes>
        </Router>
      </RecoilRoot>
    </div >
  );
}

export default App;
