 import logo from './logo.svg';
import './App.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Groups from './components/Groups';
import Events from './components/Events';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/groups' exact element={<Groups />} />
          <Route path='/events' exact element={<Events />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
