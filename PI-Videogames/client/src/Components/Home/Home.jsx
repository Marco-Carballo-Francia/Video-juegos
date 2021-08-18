import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Home.css';
import logo from './PrincipalPage-Fondo2.jpg';
import { Cards } from '../Cards/Cards';
import { SearchBar } from '../NavBar/SearchBar/SearchBar';
import { Nav } from '../NavBar/Nav/NavBar';
import { Order } from '../OrderBar/Order/Order';
import { Paged } from '../Paged/Paged';
import { allVideogames as getVideogamesAPI } from '../../Actions/Actions';

export function Home() {
    const [pages, setPages] = useState(1);
    const [allVideogames, setAllVideogames] = useState([]);

    const videogames = useSelector((state) => state.videogames);
    const dispatch = useDispatch();

    const videogamesPerPage = 9;

    const indexLastVideogames = pages * videogamesPerPage;
    const indexFirstVideogames = indexLastVideogames - videogamesPerPage;
    const videogamesPage = allVideogames?.slice(indexFirstVideogames, indexLastVideogames);
    const pageds = (num) => setPages(num);

    useEffect(() => {
        dispatch(getVideogamesAPI()) // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setAllVideogames(videogames?.slice()); // eslint-disable-next-line
    }, [])

    return (
        <div className='Home'>
            <div className='img-fondo'>
                <img src={logo} alt='No se encontro el fondo'/>
            </div>
            <Nav />
            <SearchBar />
            <Order />
            <Cards 
                videogames={videogamesPage}
            />
            <Paged 
                videogamesPerPage={videogamesPerPage}
                videogamesPage={videogamesPage}
                pageds={pageds}
            />
        </div>
    )
}