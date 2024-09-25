import MovieCard from '../components/MovieCard';
import data from '../data';
function Home(){
    return(
    <>
    <div className='flex items-center w-[90%] mx-auto justify-between'>
        <h1 className='text-4xl font-bold text-red-600 m-0' >Netflix</h1>
        <div className='border px-4 py-2 text-white rounded-lg' >Login</div>
    </div>

<div className="flex w-[95%] gap-4 flex-wrap mx-auto mt-10">

    {
        
        data.map(dat =><MovieCard img = {dat.img} slug={dat.slug} />)
    }
</div>
    </>
    )
}
export default Home;