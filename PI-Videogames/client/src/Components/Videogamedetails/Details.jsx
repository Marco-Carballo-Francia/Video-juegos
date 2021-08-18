import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Details';
import { videogameDetails } from '../../Actions/Actions';


export function Details(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(videogameDetails(props.match.params.id)) // eslint-disable-next-line
    }, [])

    return (
        <div className='Details'>
            <div className='name'>
                <h2>{props.name}</h2>
            </div>
            <div className='image'>
                <img src={props.image} alt='No se encontro la IMG'/>
            </div>
            <div className='description'>
                <h4>Description</h4>
                <p>{props.description}</p>
            </div>
            <div className='rating'>
                <h6>Rating</h6>
                <p>{props.rating}</p>
            </div>
            <div className='genres'>
                <h6>Genres</h6>
                <p>{props.genres?.map(gen => gen.name).join(' ')}</p>
            </div>
            <div className='plataforms'>
                <h6>Plataforms</h6>
                <p>{props.plataforms?.map(plat => plat.name).join(' ')}</p>
            </div>
            <Link to='/Home'>
                <button type='submit'>Back</button>
            </Link>
        </div>
    )
}