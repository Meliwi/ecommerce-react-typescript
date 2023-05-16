import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import { Cart } from "../Cart/Cart";
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    if (window.innerWidth < 768) {
      toggleMenu();
    }
  };

  return (
    <header className="py-4 flex items-center md:flex-row justify-between max-w-screen-xl mx-auto md:px-4">
      <div className="flex items-center gap-2">
        <button
          className="md:hidden ml-4 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          <AiOutlineMenu className="text-3xl" />
        </button>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <nav
        className={`${
          isMenuOpen
            ? "fixed top-0 left-0 h-full w-full z-50 bg-white p-8"
            : "hidden"
        } md:block md:flex md:items-center md:ml-4 transition-transform duration-300 ease-in-out`}
      >
        {isMenuOpen ? (
          <button onClick={toggleMenu}>
            <AiOutlineClose className="text-3xl" />
          </button>
        ) : null}
        <ul className="flex flex-col items-center gap-3 md:flex-row">
          <li className="md:mr-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-sky-400"
                  : "hover:underline hover:underline-offset-4 decoration-sky-400"
              }
              onClick={handleNavLinkClick}
            >
              Home
            </NavLink>
          </li>
          <li className="md:mr-6">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-sky-400"
                  : "hover:underline hover:underline-offset-4 decoration-sky-400"
              }
              onClick={handleNavLinkClick}
            >
              Products
            </NavLink>
          </li>
          <li className="md:mr-6">
            <NavLink
              to="/history"
              className={({ isActive }) =>
                isActive
                  ? "text-sky-400"
                  : "hover:underline hover:underline-offset-4 decoration-sky-400"
              }
              onClick={handleNavLinkClick}
            >
              History
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center mt-4 md:mt-0">
        <NavLink to="/cart">
          <Cart />
        </NavLink>
        <NavLink to="/login">
          <AiOutlineUser className="text-2xl" />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
