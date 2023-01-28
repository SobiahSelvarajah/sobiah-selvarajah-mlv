import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact path='/'
          element={<Homepage/>}
        />
      </Routes>
    </Router>
  );
}

export default App;