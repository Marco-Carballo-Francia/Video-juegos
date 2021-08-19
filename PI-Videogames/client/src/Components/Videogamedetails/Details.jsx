import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Details';
//import { videogameDetails } from '../../Actions/Actions';


export function Details() {
    // const dispatch = useDispatch();
    let videogame = useSelector((state) => state.videogameDetail);
    // console.log(videogameDetails(props))
    console.log("VIDEOGAME", videogame)

    return (    
        <div className='Details'>
            <div className='container-details'>
                <div className='info'>
                    <div className='name'></div>
                        <h2>{videogame[0]?.name}</h2>
                    <div className='imagen'>
                        <img src={videogame[0]?.img} alt={videogame[0]?.name} /> 
                        <p className=''>({videogame[0]?.released})</p>
                    </div>
                    <div className='genres'>
                        <i class="fa fa-eercast" aria-hidden="true"></i>
                        <p className=''>Genres: </p>
                        {videogame[0]?.genres?.map((g) =>
                            <p>{g.name}</p>
                        )}
                    </div>
                        
                    <div className=''>
                        <i class="fa fa-bar-chart" aria-hidden="true"></i>
                        <p className=''>Rating: {videogame[0]?.rating}</p>
                    </div>
                        
                    <div className=''>
                        <i class="fa fa-play" aria-hidden="true"></i>
                        <p className=''>Platforms: </p>
                        {videogame[0]?.platforms?.map((p) =>
                            <p>{p.name}</p>
                        )}
                    </div>
                    <div className='description'>
                        <p><strong>Description:</strong></p>
                        <p>{videogame[0]?.description}</p>
                    </div>
                </div>
            </div>
            <Link to="/home">
                <button className='btn-Back' type="submit">Back</button>
            </Link>
        </div>    
    );
}
