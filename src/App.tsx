import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard  from "./pages/Dashboard";
import About from './pages/About';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Analytics from './pages/Analytics';

const App: React.FC = () => {
   return (
<BrowserRouter>
<Sidebar>
<Routes>
  <Route path='/' element={<Dashboard/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/analytics' element={<Analytics/>}/>
</Routes>
</Sidebar>
</BrowserRouter>
 );
};

export default App;
