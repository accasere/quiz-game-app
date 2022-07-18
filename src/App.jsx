import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import QuizInstructions from './components/QuizInstructions';
import Play from './components/Play';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/play/instructions" element={<QuizInstructions/>} />
        <Route path="/play/play" element={<Play/>} />
      </Routes>
    </BrowserRouter>
   
    );
}

export default App;
