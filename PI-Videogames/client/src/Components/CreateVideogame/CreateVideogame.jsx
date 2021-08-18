import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CreateVideogames.css';
import { createVideogame } from '../../Actions/Actions';


export function AddVideogames() {
    const [input, setInput] = useState({
        name: '',
        description: '',
        rating: 0,
        released: '',
        genreName: null,
        platformName: null,
        img: null
    })
    
    const dispatch = useDispatch();

    const created = useSelector(state => state.videogamesCreate)
    const genres = useSelector(state => state.genres)

    useEffect (() => {
        dispatch(createVideogame(input)) // eslint-disable-next-line
    }, [])

    useEffect (() => {
        setInput(created)
    }, [created])

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleGenres = (e) => {
        setInput({
            ...input,
            genresName: [...input.genres, e.target.value]
        })
    }

    const handlePlatforms = (e) => {
        setInput({
            ...input,
            platformName: [...input.platforms, e.target.value]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createVideogame(input);
        setInput({});
        alert('Videogame create');
    }

    return (
        <div className='CreateVideogame'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='name'>
                    <label>Name:</label>
                    <input 
                        type='text'
                        name='name'
                        value={input.name}
                        onChange={handleChange}
                    />
                </div>
                <div className='description'>
                    <label>Description:</label>
                    <input 
                        type='text'
                        name='description'
                        value={input.description}
                        onChange={handleChange}
                    />
                </div>
                <div className='rating'>
                    <label>Rating:</label>
                    <input 
                        type='number'
                        name='rating'
                        value={input.rating}
                        onChange={handleChange}
                    />
                </div>
                <div className='released'>
                    <label>Released:</label>
                    <input 
                        type='date'
                        name='released'
                        value={input.released}
                        onChange={handleChange}
                    />
                </div>
                <div className='genres'>
                    <label>Genres:</label>
                    <select onChange={e => handleGenres(e)} id="genres" name="genres">
                            <option name="genres"></option>
                            {
                                genres?.map(gen => (
                                    <option value={gen}>{gen}</option>
                                    ))
                            }
                        </select>
                </div>
                <div className='plataforms'>
                    <label>Platforms:</label>
                    <select onChange={e => handlePlatforms(e)}>
                            <option name='PC'>PC</option>
                            <option name='PlayStation'>PlayStation</option>
                            <option name='Xbox'>Xbox</option>
                            <option name='Nintendo'>Nintendo</option>
                            <option name='Apple Macintosh'>Apple Macintosh</option>
                            <option name='Linux'>Linux</option>
                            <option name='Android'>Android</option>
                            <option name='IOS'>IOS</option>
                            <option name='Wii'>Wii</option>
                        </select>
                </div>
                <div className='imagen'>
                    <label>Image:</label>
                    <input 
                        type='url'
                        name='img'
                        placeholder='URL'
                        value={input.img}
                        onChange={handleChange} 
                    />
                </div>
                <div className='btn-create'>
                    <button type='submit'>Create Videogame</button>
                </div>
            </form>
        </div>
    )
} 