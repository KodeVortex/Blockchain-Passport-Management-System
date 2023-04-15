import './App.css';
import Video from './components/Video'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Create from './components/Create'
import Verify from './components/Verify'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Video />
      <BrowserRouter>        
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="create" element={<Create />} />
            <Route path="verify" element={<Verify />} />
          </Routes>        
      </BrowserRouter>
    </>
  );
}

export default App;
