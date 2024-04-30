import  { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const { user, signOutUser } = useContext(AuthContext);

  return (
    <div className="navbar bg-gray-100 rounded-xl">
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
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="All-Art">All Art & craft items</NavLink>
            </li>
            <li>
              <NavLink to="Add-Art">Add Craft Item</NavLink>
            </li>
            <li>
              <NavLink to="My-Art">My Art & Craft List</NavLink>
            </li>
            <li>
              <NavLink to="update-profile">Update Profile</NavLink>
            </li>
            <li>
              <NavLink to="login">Login</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <span className="text-red-600">Arts</span>
          <span className="text-orange-700">&</span>
          <span className="text-yellow-500">Crafts</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="All-Art">All Art & craft items</NavLink>
          </li>
          <li>
            <NavLink to="Add-Art">Add Craft Item</NavLink>
          </li>
          <li>
            <NavLink to="My-Art">My Art & Craft List</NavLink>
          </li>
          <li>
            <NavLink to="update-profile">Update Profile</NavLink>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown tooltip dropdown-end" data-tip={user?.displayName || 'user name not found'}>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL || ''} alt="user profile" />
              </div>
            </label>
            <ul className="menu menu-sm hover dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <button className="btn btn-sm btn-ghost">{user?.displayName || 'user name not found'}</button>
              </li>
              <li>
                <button onClick={signOutUser} className="btn btn-sm btn-ghost">Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm btn-ghost">Login</button>
          </Link>
        )}
        <label className="cursor-pointer grid place-items-center">
          <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
          <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" />
        </label>
        <Tooltip id="my-tooltip" /> {/* Tooltip component */}
      </div>
    </div>
  );
};

export default Navbar;
