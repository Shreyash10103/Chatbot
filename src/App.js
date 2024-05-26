// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './component/Sidebar.js';
import Chatbot from './component/chatbot.js';
import Formi from './component/Formi.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      <Router>
        <Toaster></Toaster>

        <Routes>
          <Route path="/" element={<Formi />} />
          <Route path="/home" element={<Chatbot />} />
          {/* Define more routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
