import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import authContext from "../../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(authContext);

  const handleSignOut = () => {
    signOutUser()
      .the(() => {
        console.log("Successful Sign Out");
      })
      .catch(() => {
        console.log("Failed to Sign Out");
      });
  };

  const links = (
    <div className="flex gap-2 flex-col lg:flex-row">
      {" "}
      <li>
        <NavLink to="/"> Home</NavLink>
      </li>
      <li>
        <NavLink to="/"> Home</NavLink>
      </li>
      <li>
        <NavLink to="/"> Home</NavLink>
      </li>
    </div>
  );
  return (
    <div className="navbar w-11/12 md:w-10/12 mx-auto p-0">
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
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-2">
        {user ? (
          <>
            <Link onClick={handleSignOut} className="btn">
              Log Out
            </Link>
          </>
        ) : (
          <>
            <Link to="/register" className="btn">
              Register
            </Link>
            <Link to="/signIn" className="btn">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
