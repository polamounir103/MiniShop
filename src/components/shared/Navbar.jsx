import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBagShopping, FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const { cart } = useSelector((state) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY > 100;
      setIsScrolled(offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/cart", label: "Cart" },
  ];

  return (
    <nav
      className={`bg-white sticky top-0 left-0 z-50 transition-shadow ${
        isScrolled ? "shadow-lg border-b border-blue-950" : "shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl md:text-2xl font-bold hover:text-blue-950 transition-colors"
          >
            <FaBagShopping className="flex-shrink-0" />
            <span>MiniShop</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="px-3 py-2 hover:text-blue-900 transition-colors text-lg font-bold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Link
              to="/cart"
              className="relative p-2 hover:text-blue-900 transition-colors"
              aria-label="Cart"
            >
              <FaCartShopping className="text-xl" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-blue-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2 hover:text-blue-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <HiX className="text-2xl" />
              ) : (
                <HiOutlineMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-40  bg-opacity-50 transition-opacity ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`absolute top-16 left-0 right-0 bg-white shadow-lg transform transition-transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col py-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className="block px-6 py-3 hover:bg-gray-100 font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
