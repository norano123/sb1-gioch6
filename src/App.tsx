import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Register from './pages/Register';
import Studio from './pages/Studio';

function App() {
  return (
    <Router>
      <div className="h-screen bg-gray-50">
        <Header />
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/studio" element={<Studio />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;