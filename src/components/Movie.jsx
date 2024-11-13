const Movie = ({ allMovie }) => {
    return(
        <>
            <h1 className="grid justify-items-center my-10 text-xl">Show Your Movies</h1>
            <div className="grid grid-cols-5 gap-4 mx-20 mb-10">
                {allMovie.allMovie && allMovie.allMovie.map((movie, index) => (
                    <div className="card bg-base-100 w-auto shadow-xl bg-orange-500" key={index}>
                    <figure>
                        <img
                        src={movie.Poster} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{movie.Title}</h2>
                    </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Movie