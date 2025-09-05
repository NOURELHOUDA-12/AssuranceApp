// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './Components/FirstPage/FirstPage'
import Login from './Components/Register/Login'

import Register from './Components/Register/Register'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />

 <Route path="/Login" element={<Login />} />

 <Route path="/Register" element={<Register />} />

     

      {/* <Route element={<Layout />}>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/needs/:category" element={<NeedDetailPage />} /> 
          <Route path="/needs/:category/:needSlug" element={<NeedInfoPage />} /> 
          <Route path="/exercises/:category" element={<ExercisePage />} />
   </Route> */}
        </Routes>
      
    </Router>
  );
};

export default App;

