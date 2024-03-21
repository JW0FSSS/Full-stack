import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetCategories } from "../services/categories";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../store/ConfigureStore";
import { setCategory } from "../store/categoryReducer";
import { User } from "../icons/profile";
import { Heart } from "../icons/heart";
import { Game } from "../icons/game";
import { Help } from "../icons/help";
import { Conditions } from "../icons/conditons";
import { Confidelity } from "../icons/confidelity";
import { Facebook } from "../icons/facebook";
import { Instagram } from "../icons/instagram";
import { Cart } from "../icons/cart";
import { Store } from "../icons/store";
import { Spinner } from "./spinner/spiner";

export function SideBar() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(50);
  const [loadCategories, setLoadCategories] = useState(false);
  const categories = useSelector((state: IStore) => state.category);
  const categoriesDispatch = useDispatch();

  useEffect(() => {
    setLoadCategories(true)
    GetCategories().then((categories) => {
      categoriesDispatch(setCategory(categories));
      setLoadCategories(false)
    });
  }, []);
  if (loadCategories) {
    setInterval(()=>{
      setTime(time-1)
    },1000)
    return <h1 className="text-center text-black">{time}</h1>
  }
  return (
    <>
      <button
        className={`md:hidden fixed z-10 lgtop-5 lgright-5 top-3 right-3 ${
          open ? "bg-red-600/70 z-20 text-white" : "bg-white/90"
        } rounded-full lg:p-3 p-2`}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        )}
      </button>
      <aside
        className={`fixed left-0 top-0 bottom-0 md:w-80 w-full bg-black/90 text-white/70 flex flex-col items-start gap-10 py-5 pl-20 overflow-y-scroll transition-all md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ scrollbarWidth: "none", overflowY: "scroll" }}
      >
        <header className="flex">
          <Link to="/" className="w-12">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/024/553/534/small/lion-head-logo-mascot-wildlife-animal-illustration-generative-ai-png.png"
              alt="Good Games-logo"
            />
          </Link>
          <div className="flex flex-col text-white font-semibold justify-center items-center">
            <span className="text-green-700 text-xl">GOOD</span>
            <p>GAMES</p>
          </div>
        </header>
        <Link
          to="/cart"
          className="px-8 py-2 rounded-full bg-green-800 text-white/90"
        >
          Go to Pay
        </Link>

        <nav className="flex flex-col gap-5">
          <Link to={"/profile"}>
            <div className="flex gap-5">
              {" "}
              <User /> <p>Profile</p>
            </div>
          </Link>
          <Link to={"/cart"}>
            <div className="flex gap-5">
              {" "}
              <Cart />
              <p>Cart</p>
            </div>
          </Link>
          <Link to={"/favorite"}>
            <div className="flex gap-5">
              {" "}
              <Heart /> <p>Favorite</p>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="flex gap-5">
              {" "}
              <Store /> <p>Products</p>
            </div>
          </Link>
        </nav>
        <div className="">
          <h1 className="pb-7">Category</h1>
          <div className="flex flex-col gap-4 items-start">
            {categories.map((category) => {
              return (
                <button key={category._id} className="flex gap-5">
                  <Game /> <p>{category.name}</p>
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex gap-5">
          <Link to={"/"}>
            <img src="" alt="" />
            <Facebook />
          </Link>
          <Link to={"/"}>
            <img src="" alt="" />
            <Instagram />
          </Link>
          <Link to={"/"}>
            <img src="" alt="" />
            <Facebook />
          </Link>
          <Link to={"/"}>
            <img src="" alt="" />
            <Instagram />
          </Link>
          <Link to={"/"}>
            <img src="" alt="" />
            <Facebook />
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link to={"/"}>
            <img src="" alt="" />
            <div className="flex gap-5">
              <Help /> Help
            </div>
          </Link>
          <Link to={"/"}>
            <img src="" alt="" />
            <div className="flex gap-5">
              <Conditions />
              Conditions
            </div>
          </Link>
          <Link to={"/"}>
            <img src="" alt="" />
            <div className="flex gap-5">
              <Confidelity />
              Confidelity
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
}
