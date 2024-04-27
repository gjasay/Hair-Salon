import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white h-16 px-8">
      <div className="container mx-auto flex justify-between items-center h-full">
        <h1 className="font-bold text-3xl hover:text-gray-300 transition-colors duration-200">
          <a href="/">Hair Salon</a>
        </h1>
        <div className="relative lg:hidden">
          <div
            className={`fixed right-0 top-0 h-full w-64 bg-gray-800 transform transition-transform duration-200 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="space-y-6 p-6 pt-16 text-lg">
              <li>
                <a
                  href="/"
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/schedule-appointment"
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Booking
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#ffffff"
            size={24}
          />
        </div>
        <nav className="hidden lg:flex space-x-8 text-lg items-center h-full">
          <a
            href="/"
            className="text-white h-full hover:bg-gray-700 flex items-center transition-colors duration-200 px-2 py-1"
          >
            Home
          </a>
          <a
            href="/services"
            className="text-white h-full hover:bg-gray-700 flex items-center transition-colors duration-200 px-2 py-1"
          >
            Services
          </a>
          <a
            href="/schedule-appointment"
            className="text-white h-full hover:bg-gray-700 flex items-center transition-colors duration-200 px-2 py-1"
          >
            Booking
          </a>
          <a
            href="/contact"
            className="text-white h-full hover:bg-gray-700 flex items-center transition-colors duration-200 px-2 py-1"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
