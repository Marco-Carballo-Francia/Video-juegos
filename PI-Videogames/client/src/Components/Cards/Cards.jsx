import React from 'react';
import './Cards.css';
import { Card } from './Card';


export function Cards({ videogames }) {
    return (
        <div className='Cards'> 
            {
                videogames?.map(vid => <Card
                    img={vid.image}
                    name={vid.name}
                    genres={vid.genres}    
                    key={vid.id}                
                />)
            }
        </div>
    );
}