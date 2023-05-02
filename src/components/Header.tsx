import logo from '../assets/logo.svg';
import { SlBasket } from 'react-icons/sl'

function Header (): JSX.Element {
    return (
      <header className="py-8 flex justify-between">
        <img src={logo} alt="logo" />
        <nav>
          <ul className="flex">
            <li className="mr-6">
              <a href="/">Home</a>
            </li>
            <li className="mr-6">
              <a href="/products">Products</a>
            </li>
          </ul>
        </nav>
        <SlBasket className="text-2xl" />
      </header>
    );
}

export default Header;