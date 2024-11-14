import Search from "./Search";

const Header = ({ title, handleSubmit, handleInputChange }) => {
    return(
        <div className="navbar bg-base-100 bg-orange-500 p-5 h-7 sm:p-5 h-auto flex flex-col sm:flex-row items-center justify-between">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl text-white">{title}</a>
            </div>
            <div className="flex-none gap-1 h-2">
                <div className="form-control">
                    <Search handleSubmit={handleSubmit} handleInputChange={handleInputChange}/>
                </div>
            </div>
        </div>
    )
}

export default Header