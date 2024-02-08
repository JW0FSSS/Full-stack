import { Link} from "react-router-dom";

export function SideBar() {
    return(
        <aside className="fixed bg-black/90 text-white/70 left-0 top-0 bottom-0 w-80 flex flex-col items-start gap-10 py-5 pl-20">
            <div className="flex gap-2">
                <Link to='/'><img src="" alt="" /></Link>
                <h1>GOOD GAMES</h1>
            </div>
            <Link to='/products'>Go to Products</Link>

            <nav className="flex flex-col gap-5">
                <Link to={'/profile'}> <img src="" alt="" /> <p>Profile</p></Link>
                <Link to={'/'}> <img src="" alt="" /> <p>Search</p></Link>
                <Link to={'/favorite'}> <img src="" alt="" /> <p>Favorite</p></Link>
                <Link to={'/'}> <img src="" alt="" /> <p>To do</p></Link>
            </nav>
            <div className="">
                <h1 className="pb-7">Category</h1>
                <div className="flex flex-col">

                <button><img src="" alt="" /> <p>name</p></button>
                <button><img src="" alt="" /> <p>name</p></button>
                <button><img src="" alt="" /> <p>name</p></button>
                <button><img src="" alt="" /> <p>name</p></button>
                <button><img src="" alt="" /> <p>name</p></button>
                <button><img src="" alt="" /> <p>name</p></button>
                <button><img src="" alt="" /> <p>name</p></button>
                <button><img src="" alt="" /> <p>name</p></button>
                <button><img src="" alt="" /> <p>name</p></button>
                <button><img src="" alt="" /> <p>name</p></button>
                <button><img src="" alt="" /> <p>name</p></button>
                </div>
            </div>
            <div className="flex gap-5">
                <Link to={'/'}><img src="" alt="" />a</Link>
                <Link to={'/'}><img src="" alt="" />a</Link>
                <Link to={'/'}><img src="" alt="" />a</Link>
                <Link to={'/'}><img src="" alt="" />a</Link>
                <Link to={'/'}><img src="" alt="" />a</Link>
            </div>
            <div className="flex flex-col gap-4">
                <Link to={'/'}><img src="" alt="" />Help</Link>
                <Link to={'/'}><img src="" alt="" />Conditions</Link>
                <Link to={'/'}><img src="" alt="" />Confidelity</Link>
            </div>
        </aside>
    )
}