import { useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  useEffect( ()=>{
    getMenu();
  })

// get route for the menuItems
  let getMenu=()=>{
    console.log( ' in getMenu');
    axios.get( '/api/pizza' ).then( (response)=>{
      console.log( 'back from GET with:', response );
    }).catch( ( err ) =>{
      console.log( err );
      alert( 'err' ); 
    })
  }

    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
    
        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
    
      </div>
    );
  }

export default App;
