import React from 'react';
import './App.css';
import Registration from './Components/registration';
import {BrowserRouter ,Route} from 'react-router-dom'
import Feed from './Components/feed'
import SignIn from './Components/signIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Route exact path="/" component={ Registration}></Route>
      <Route path="/Login" component={SignIn}></Route>
      <Route path="/Feed" component={Feed}></Route>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
