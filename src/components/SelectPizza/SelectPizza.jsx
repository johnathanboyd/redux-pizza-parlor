import { useSelector } from 'react-redux';
import React from 'react';
import SelectPizzaItem from '../SelectPizzaItem/SelectPizzaItem';

function SelectPizza(){
    const pizza = useSelector( ( store )=>{
        return store.pizzaMenu;
    })
    return(
        
        <div>
            <h2>MENU</h2>
            <ul>
                { pizza.map( ( item )=>
                    <SelectPizzaItem item={ item } key={ item.id }/>
                )}
            </ul>     
        </div>
        
    )
}

export default SelectPizza;