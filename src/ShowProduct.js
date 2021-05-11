import React, { useState } from 'react';

function ShowProduct(props){

    const {products,category}=props;
    const [arr,setArr]=useState(products.filter(p=>p.category==category))

    const hideExpensive=()=>{
        const temp=arr.filter(p=>p.price<15);
        setArr([...temp])
    }

    return(
        <div>
            <h1>products:</h1>
            <ul>
                {
                    arr.map((p,index)=>
                        <li key={index}>{p.name} {p.price}</li>
                    )
                }
            </ul>
            {
                arr.length>5?
                <p>יש מעל 5 מוצרים בקטגוריה זו</p>
                :''
            }
            
            <button onClick={hideExpensive}>הסתר פריטים שמחירם יקר</button>

        </div>
    )
}

export default ShowProduct