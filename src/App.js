import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Product1 from './Product1';
import { BrowserRouter as Router,Routes,Route, Form } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation/>}/>
        <Route path='/Product1' element={<Product1/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
