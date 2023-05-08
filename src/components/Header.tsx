import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { Cart } from './Cart';
import {AiOutlineUser} from "react-icons/ai";

function Header (): JSX.Element {
    return (
      <header className="py-8 flex justify-between items-center">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <nav>
          <ul className="flex">
            <li className="mr-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-400"
                    : "hover:underline hover:underline-offset-4 decoration-sky-400"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-400"
                    : "hover:underline hover:underline-offset-4 decoration-sky-400"
                }
              >
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className='flex'>
            <NavLink to="/cart"> <Cart /> </NavLink>
            <NavLink to="/login"> <AiOutlineUser className="text-2xl ml-4"/> </NavLink>
        </div>
      </header>
    );
}

export default Header;