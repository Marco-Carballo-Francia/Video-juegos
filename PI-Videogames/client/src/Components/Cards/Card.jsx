import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';


export function Card(props) {
    return (
        <div className='Card' key={props.id}>
            <div className='img'>
                <Link to={`/videogame/:${props.id}`}>
                    <img src={props.img} alt='No se encontro Img' />
                </Link>
            </div>
            <div className='name'>
                <h5>{props.name}</h5>
            </div>
            <div className='genres'> {
                    props.genres.map(gen => (
                        <p>{gen.name}</p>
                    ))
                }
            </div>
        </div>
    );
}