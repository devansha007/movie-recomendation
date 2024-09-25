import { Link } from "react-router-dom";
function MovieCard({img ,slug }){
    return (
    <>
    
   <div className="div  mx-auto">
   <Link to={`/${slug}`}  >
   <img className="w-[220px] object-cover rounded-lg" src={img} alt="image" />
   </Link>
   </div>
  
     </>
    )
}
export default MovieCard;