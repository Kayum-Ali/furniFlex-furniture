import { Link, NavLink } from "react-router-dom";
import { BsMinecartLoaded } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bg-base-100">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={`/`}>Home</NavLink>{" "}
              </li>
              <li>
                <NavLink to={`/products`}>Products</NavLink>{" "}
              </li>
              <li>
                <NavLink to={`/categories`}>Categories</NavLink>{" "}
              </li>
              <li>
                <NavLink to={`/custom`}>Custom</NavLink>{" "}
              </li>
              <li>
                <NavLink to={`/blog`}>Blog</NavLink>{" "}
              </li>
            </ul>
          </div>
          <Link to={`/`} className=" text-xl">
            <img
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1725602914/Logo_kiopd7.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={`/`}>Home</NavLink>{" "}
            </li>
            <li>
              <NavLink to={`/products`}>Products</NavLink>{" "}
            </li>
            <li>
              <NavLink to={`/categories`}>Categories</NavLink>{" "}
            </li>
            <li>
              <NavLink to={`/custom`}>Custom</NavLink>{" "}
            </li>
            <li>
              <NavLink to={`/blog`}>Blog</NavLink>{" "}
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <BsMinecartLoaded className="text-3xl"></BsMinecartLoaded>
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
