import './App.css';
import HomeContainer from './Container/HomeContainer/HomeContainer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MovieDescriptor from './Components/MovieDescriptor/MovieDescriptor';
function App() {
  return (
    <div>
      <BrowserRouter>
      
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="home" element={<HomeContainer />} />
            <Route path="movieDescriptor/:id" element={<MovieDescriptor />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
