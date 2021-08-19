import React from 'react';
import './Cards.css';
import { Card } from './Card';


export function Cards({ videogames }) {
    //console.log(videogames, '11111111111111111111111111')
    return (
        <div className='Cards'> 
            {
                videogames?.map((vid, index) => <Card
                    img={vid.image}
                    name={vid.name}
                    genres={vid.genres}    
                    id={vid.id}
                    key={index}
                    index={index}                
                />)
            }
        </div>
    );
}