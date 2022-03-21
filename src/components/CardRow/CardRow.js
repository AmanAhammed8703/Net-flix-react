import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import "./CardRow.css"
import { API_KEY, imageUrl } from '../../Constants/Constants'
import axios from '../../axios'
function CardRow(props) {
    const [urlId, setUrlId] = useState("")
    const [movies, setMovies] = useState([])
   useEffect(() => {
     axios.get(props.url).then((response)=>{
         console.log(response.data);
         setMovies(response.data.results)
     }).catch(err=>{
         alert('Network error')
     })
   },[])
   const playTrailer=(id)=>{
       console.log(id);
       axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
           if(response.data.results.length!=0){
            setUrlId(response.data.results[0])
           }else{
               console.log("Empty array");
           }
           
       })
   }
   const opts = {
    height: '390',
    width: '100%',
    playerVars: {
     
      autoplay: 0,
    },
  };
    return (
        <div className='card-row'>
            <h1 className='category-title'>{props.title}</h1>
            <div className="cards">
                {movies.map((obj)=>

                <img  onClick={()=>playTrailer(obj.id)} className={props.isSmall?'small-card-image':'card-image'}key={obj.backdrop_path} src={`${imageUrl+obj.backdrop_path}`} alt="" />
                )}
                
            </div>
           { urlId && <Youtube videoId={urlId.key} onEnd={()=>setUrlId("")} opts={opts}/>}
        </div>
    )
}

export default CardRow