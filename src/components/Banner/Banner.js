import React, { useEffect, useState } from 'react'
import './Banner.css'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import axios from '../../axios'
function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(()=>{
        let x = Math.floor((Math.random()*10)+0)
        axios.get(`/discover/movie?api_key=${API_KEY}&with_genres=28`).then((response)=>{
            console.log(response.data.results[0]);
            setMovie(response.data.results[x])
        })
    },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}>
        <div className="content">
            <h1 className='title'>{movie ? movie.title:""}</h1>
                <div className="banner_buttons">
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
            <h1 className='description'>{movie ? movie.overview:""}</h1>
        </div>
        <div className="gradient_bottom">

        </div>
    </div>
  )
}

export default Banner