import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
 import Sidenav from './components/Sidenav/Sidenav'


 function App() {
  const navigat = useNavigate();

  return (
    <Router>
      <Sidenav navigate={navigat} />
      
    </Router>
  );
}

export default App;

