import React from 'react';

export const MpSuccess = (props) =>{
    const result = props.location.search.split('?')[1];
    const success_data = result.split('&');

    if(success_data.length >= 1){
        success_data.map((data,i)=>{
            console.log(`Dato ${i + 1}:`,data);
        });
    }
    return(
        <h1>Hola!</h1>
    )
}