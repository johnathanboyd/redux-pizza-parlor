import { useState } from 'react';


function SelectPizzaItem(props){
    const [tempOrder, setTempOrder ] = useState( [] );


    let addToOrder =()=>{
        console.log( 'you clicked the button with the id', props.item.id );
    }

    let displayName =()=>{
        let displayText = props.item.name;
        return displayText;
    }
    let displayImage =()=>{
        let image = props.item.image_path;
        return image;
    }

    let displayDescription =()=>{
        let displayText = props.item.description;
        return displayText;
    }

    let displayPrice =()=>{
        let displayText = props.item.price;
        return displayText;
    }   
    return(
        <>
        <div>
            <h3><strong>{displayName()}</strong></h3>;
            <img src={displayImage()} />
            <p>{displayDescription()}</p>
            <p>${displayPrice()}</p>
            <button onClick={addToOrder} id="props.item.id">Add to Order</button>
        </div>
        </>
    )
}

export default SelectPizzaItem;