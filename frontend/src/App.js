import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from './components/dashboard/dashboard';
import Api from './components/api/api';
import Add from './components/add/add';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/api" element={<Api />} />
        <Route path="/add" element={<Add />} />
        <Route path="**" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;