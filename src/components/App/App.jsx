import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import React from 'react';
import axios from 'axios';
import './App.css';
import SelectPizza from '../SelectPizza/SelectPizza';

function App() {

  // tell app to use dispatch
  const dispatch = useDispatch();

  useEffect( ()=>{
    getMenu();
    getOrder();
  }, [])

 const [ tempOrder, setTempItem ] = useState( 
   { "customer_name": "Donatello", 
   "street_address": "20 W 34th St", 
   "city": "New York", 
   "zip": "10001", 
   "total": "27.98", 
   "type": "Pickup", 
   "pizzas": [
     {"id": "1", "quantity": "1" },
      { "id": "2", "quantity": "1" }]
  }
) 
// get route for the menuItems
  let getMenu=()=>{
    console.log( ' in getMenu');
    axios.get( '/api/pizza' ).then( (response)=>{
      dispatch( { type:'setPizzaMenu' , payload: response.data } );
      console.log( 'back from getMenu GET with:', response );
    }).catch( ( err ) =>{
      console.log( err );
      alert( 'err from getMenu' ); 
    })
  }
// post to our our order list
  let newOrder=()=>{
    console.log( 'in newOrder' );
    axios.post( '/api/order', tempOrder ).then( ( response )=>{
      console.log( 'back from newOrder POST with:', response );
      getMenu();
    }).catch( ( err )=>{
      console.log( err );
      alert( 'newOrder not working' )
    })
  }
  // get route for order
  let getOrder=()=>{
    console.log( ' in getMenu');
    axios.get( '/api/order' ).then( (response)=>{
      console.log( 'back from getOrder GET with:', response );
    }).catch( ( err ) =>{
      console.log( err );
      alert( 'err from getOrder' ); 
    })
  }

    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
    
        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
        <SelectPizza />
      </div>
    );
  }

export default App;
