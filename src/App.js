import './App.css';
import Video from './components/Video'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Create from './components/Create'
import Verify from './components/Verify'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
  
      <BrowserRouter>
        <div className='btn'>
          <Button as={Link} to='/create' value="Create Passport" />
          <Button as={Link} to="/verify" value="Verify Passport" />
        </div>

        <Routes>
          <Route exact path="create" element={<Create/>} />
          <Route exact path="verify" element={<Verify/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
