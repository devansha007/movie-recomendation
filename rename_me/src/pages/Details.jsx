import ReactPlayer from 'react-player'
import { useState } from 'react';
import { useParams } from "react-router-dom"
import data from "../data";
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom';
function Details(){
    let {slug} = useParams();
    let Unmuted = () =>( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-volume-up fill-white" viewBox="0 0 16 16">
        <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
        <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11"/>
      </svg>);

    let Muted =() =>(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-volume-mute fill-white" viewBox="0 0 16 16">
        <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06M6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/>
      </svg>);
   
    let movie = data.find(move => move.slug == slug)

    let suggesions = data.filter( more => more.genre == movie.genre && more.imdb_rating > movie.imdb_rating )

    let [mute,setvol] = useState(true)
    
    function MuteCont(){
     setvol((prev) =>!prev )
    }



    return(
        <>
       <div className="div w-100 h-[80vh] overflow-hidden">
       
        <ReactPlayer className="scale-[1.50]" height="80vh" width="100vw" playing='true' loop="true" muted={mute} url={movie.youtube_trailer} />
        <div className="absolute top-[40%] left-[12%]">
        <button className='bg-orange-700 px-5 text-white rounded-lg'>{movie.imdb_rating} Imdb Rating </button>
        <h1 className='text-5xl font-black text-white my-2'>{movie.title}</h1>
        <p className='w-[35%] text-white' >{movie.description}</p>
        <button className='absolute top-[40%] right-[0%]' onClick={MuteCont} >{ mute ? <Muted /> : <Unmuted/> } </button>
      <Link to='/' >
      <button className='absolute top-[-90%] right-[0%] border px-5 py-2 text-white rounded-lg'> Go Back</button>
       
      </Link>
      
      
       </div>

        
        </div>
        <h1 className='text-center font-black text-white text-5xl my-5' > More like This </h1>
        <div className="div mt-5 flex py-[100px]">
       
           {
          
           suggesions.map( bob => <MovieCard img={bob.img} slug={bob.slug} />)
           }
            
        </div>
       
        </>
    )

}
export default Details