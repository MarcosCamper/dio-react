import { //Copiado da Documentation (Quick Start)
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  
} from "react-router-dom";
//Importando as paginas
import { Home } from './pages/home'
import { Login } from './pages/login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
