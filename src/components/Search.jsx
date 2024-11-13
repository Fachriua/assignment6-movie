// eslint-disable-next-line react/prop-types
const Search = ({handleSubmit, handleInputChange}) => {
    return(
        <form role="seacrh" onSubmit={handleSubmit}>
        <div className="join">
            <div>
                <div>
                <input className="input join-item h-8" placeholder="Search" onChange={handleInputChange}/>
                </div>
            </div>
            <div className="indicator h-8">
                <button className="btn join-item bg-orange-500 btn-sm text-white" onClick={handleSubmit}>Search</button>
            </div>
            </div>
        </form>
    )
}

export default Search