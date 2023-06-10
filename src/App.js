import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Register } from './Register';
import { Profile } from './Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/" index element={<Register />} />
        <Route path="/profile" index element={<Profile />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
