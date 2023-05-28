import { Link } from "react-router-dom";

function Breadcrumb(): JSX.Element {
    return (
      <nav
        className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-screen-xl mx-auto px-4 my-8"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to="/cart"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-sky-400 dark:text-gray-400 dark:hover:text-gray"
            >
              Cart
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <Link
                to="/checkout"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-sky-400 md:ml-2 dark:text-gray-400 dark:hover:text-gray"
              >
                Checkout
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Payment
              </span>
            </div>
          </li>
        </ol>
      </nav>
    );
}

export default Breadcrumb;