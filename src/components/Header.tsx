import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { Cart } from './Cart';
function Header (): JSX.Element {
    return (
      <header className="py-8 flex justify-between">
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
        <Cart />
      </header>
    );
}

export default Header;