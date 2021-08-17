import React from 'react';
import './Cards.css';
import { Card } from './Card';

export function Cards(videogames) {
    return (
        <div className='Cards'>
            {
                videogames.map(vid => <Card
                    key={vid.id}
                    name={vid.name}
                    genres={vid.genres}                    
                />)
            }
        </div>
    );
}