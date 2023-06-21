import './App.css';
import Video from './components/Video';
import Navbar from './components/Navbar';
import AdminHome from './components/AdminHome';
import Create from './components/Create';
import View from './components/View';
import Verify from './components/Verify';
import Back from './components/Back';
import AddressInput from './components/AddressInput';
import AdminView from './components/AdminView';
import UserHome from './components/UserHome';
import {
  Link,
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Video />
        <Back />
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/create" element={<Create />} />
          <Route path="/addressInput" element={<AddressInput />} />
          <Route path="/adminView" element={<AdminView />} />
          <Route path="/userHome" element={<UserHome />} />
          <Route path="/view" element={<View />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
