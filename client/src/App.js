import './App.css';
import { Route, Routes} from "react-router-dom"
import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import MovieDetail from './views/MovieDetail/MovieDetail';
import Auth from "./hoc/auth";
import FavoritePage from './views/FavoritePage/FavoritePage';

function App() {
  return (
      <Routes>
        <Route exact path="/" element={Auth(<LandingPage />, true)}/>
        <Route exact path="/login" element={Auth(<LoginPage />, false)}/>
        <Route exact path="/register" element={Auth(<RegisterPage />, null)}/>
        <Route exact path="/movie/:id" element={Auth(<MovieDetail/>, true)} />
        <Route exact path="/favorite" element={Auth(<FavoritePage/>, true)} />
      </Routes>
  );
}

export default App;
