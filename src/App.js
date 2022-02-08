import Activate from './pages/Activation';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
           <Route path='/' exact element={<Home/>} />
           <Route path='/activate' element={<Activate/>}/>  
        </Routes>
      </Router>
    </div>
  );
};

export default App;
