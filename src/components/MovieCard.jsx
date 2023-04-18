function MovieCard ({ poster, title, sinopsis, price }) {
  return (
    <div className='flex justify-center flex-wrap bg-slate-700 w-[450px] m-5'>
      <div className='p-3'>
        <img className='w-[150px]' src={poster} alt={`image of ${title}`} />
      </div>
      <p>Sinopsis: {sinopsis}</p>
      <p className='text-white'>Precio: {price}</p>
    </div>
  )
}

export default MovieCard
