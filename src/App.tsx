import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate
} from "react-router-dom";
import './App.css';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
          <Route path="/" element={<MainPage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
