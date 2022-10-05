import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import List from './Pages/List';
import Hotel from './Pages/Hotel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
