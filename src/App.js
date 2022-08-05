import React from 'react';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import { Provider } from 'react-redux';
import {store} from './app/store';



function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <Header />
    <Home />
    </Provider>
    
    </div>
  );
}

export default App;
