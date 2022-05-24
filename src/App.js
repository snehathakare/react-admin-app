import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home, Login } from './pages'

function App() {
  return (
    <div className="App">
      react-admin-app
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
