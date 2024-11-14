const Movie = ({ allMovie }) => {
    return(
        <>
            <h1 className="grid justify-items-center my-10 text-xl sm:text-2xl md:text-3xl">Show Your Movies</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 sm:px-8 lg:px-20 mb-10">
                {allMovie.allMovie && allMovie.allMovie.map((movie, index) => (
                    <div className="card bg-base-100 w-full sm:w-auto shadow-xl bg-orange-500" key={index}>
                        <figure className="p-2 sm:p-4">
                            <img src={movie.Poster} alt={movie.Title} className="object-cover w-full h-auto rounded-md" />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-sm sm:text-lg md:text-xl font-semibold">{movie.Title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Movie