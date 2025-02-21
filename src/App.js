import './App.css';

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";
import About from './component/About';

const App=()=> {
  const apiKey = process.env.REACT_APP_NEWS_API

  const[progress,setProgress]=useState(0)

    return (
      <Router>
        <Navbar />
        <LoadingBar 
        color="#f11946"
        progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} country="us" key= "general"  pageSize={6} category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} country="us" key= "health" pageSize={6} category="health" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} country="us" key= "business" pageSize={6} category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} country="us" key= "entertainment" pageSize={6} category="entertainment" />} />
          <Route exact path="/sports"  element={<News setProgress={setProgress} apiKey={apiKey} country="us" key= "sports" pageSize={6} category="sports" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} country="us" key= "science" pageSize={6} category="science" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} country="us" key= "technology" pageSize={6} category="technology" />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  
}

  export default App