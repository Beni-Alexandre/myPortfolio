import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Sun, Moon, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

function Header() {
  // const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   console.log(darkMode ? "Dark mode enabled" : "Light mode enabled");
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white    shadow-md dark:bg-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          {" "}
          ALEXANDRE
        </Link>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-blue-500 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
      {/* <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-500 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-500 transition-colors">
            About
          </Link>
          <Link
            to="/portfolio"
            className="hover:text-blue-500 transition-colors"
          >
            Portfolio
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition-colors">
            Contact
          </Link>
        </div> */}
      {/* <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}

      {/* {isMenuOpen && (
        <div className="hidden ">
          <Link
            to="/"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700 "
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700 "
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700 "
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700 "
          >
            Contact
          </Link>
        </div>
      )} */}
    </header>
  );
}
export default Header;
