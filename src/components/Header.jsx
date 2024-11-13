import Search from "./Search";

const Header = ({ title, handleSubmit, handleInputChange }) => {
    return(
        <div className="navbar bg-base-100 bg-orange-500 p-5 h-6">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl text-white">{title}</a>
            </div>
            <div className="flex-none gap-2 h-2">
                <div className="form-control">
                    <Search handleSubmit={handleSubmit} handleInputChange={handleInputChange}/>
                </div>
            </div>
        </div>
    )
}

export default Header