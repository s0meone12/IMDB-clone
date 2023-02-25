import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MovieDetail from './components/MovieDetail/MovieDetail';
import MovieList from './components/MovieList/MovieList';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <Routes>
            <Route index element ={<Home />}></Route>
            <Route path='movie/:id' element={<MovieDetail />}></Route>
            <Route path='movies/:type' element={<MovieList />}></Route>
            <Route path='/*' element={<h1>Error Page</h1>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
