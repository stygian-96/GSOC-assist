import './App.css';
import DropDown from './Components/DropDown';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <DropDown />
    </div>
  );
}

export default App;
