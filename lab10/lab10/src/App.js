
import React from 'react';
import './App.css';

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import SignUp from './SignUp';


//import BlogList from './components/pages/BlogList';



function App() {
  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<SignUp/>}/>
  
     

    </Routes>
  </Router>
  );
}

export default App;

        

