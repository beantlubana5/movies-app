import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate
} from "react-router-dom";
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
          <Route path="/" element={<Main/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
