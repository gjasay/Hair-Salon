import { useState } from 'react';
import {Turn as Hamburger} from 'hamburger-react';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Hair Salon</h1>
        <div className="relative lg:hidden">
          <div className={`fixed right-0 top-0 h-full w-64 bg-gray-800 transform transition-transform duration-200 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <ul className="space-y-2 p-4 pt-12">
              <li><a href="/" className="text-white hover:underline">Home</a></li>
              <li><a href="/services" className="text-white hover:underline">Services</a></li>
              <li><a href="/schedule-appointment" className="text-white hover:underline">Booking</a></li>
              <li><a href="/contact" className="text-white hover:underline">Contact</a></li>
            </ul>
          </div>
          <Hamburger toggled={isOpen} toggle={setOpen} color="#ffffff" />
        </div>
        <nav className="hidden lg:flex space-x-4">
          <a href="/" className="text-white hover:underline">Home</a>
          <a href="/services" className="text-white hover:underline">Services</a>
          <a href="/schedule-appointment" className="text-white hover:underline">Booking</a>
          <a href="/contact" className="text-white hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header;