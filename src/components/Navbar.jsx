import { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
  style={{ background: "linear-gradient(to bottom, #000A3B, #1e1e1e, #000)" }}
  className="sticky top-0 z-50"
>
      <nav className="w-full  max-h-[137px] mx-auto p-4 bg-black/10 backdrop-blur-md border-b border-white/20  flex justify-between items-center px-6 md:px-10">
      {/* Left Side: Logo + Text */}
      <div className="flex items-center relative">
        <img src="/logo.png" alt="logo" className="w-[80px] md:w-[139px] h-[60px] md:h-[104px]" />
        <h1 className="absolute top-4 left-15 md:top-6 md:left-25 text-2xl md:text-5xl text-white tracking-wide">
         <span className="text-blue-200">RAIN</span><span className="text-[#26FF60]">DROP</span>
        </h1>
      </div>

      
      <div className="hidden md:flex gap-10">
        <NavLink
          to="/"
          className={({isActive})=>
        `text-xl font-medium hover:text-[#26FF60] ${
            isActive ? "text-[#26FF60]" : "text-white"
        }`
        
        }
        >
          Home
        </NavLink>
        <NavLink
          to="/faqs"
            className={({isActive})=>
        `text-xl font-medium hover:text-[#26FF60] ${
            isActive ? "text-[#26FF60]" : "text-white"
        }`
        
        }
        >
          FAQs
        </NavLink>
        <NavLink
          to="/register"
         className={({isActive})=>
        `text-xl font-medium hover:text-[#26FF60] ${
            isActive ? "text-[#26FF60]" : "text-white"
        }`
        
        }
        >
          Register
        </NavLink>
        <NavLink
          to="/admin"
           className={({isActive})=>
        `text-xl font-medium hover:text-[#26FF60] ${
            isActive ? "text-[#26FF60]" : "text-white"
        }`
        
        }
        >
          Admin
        </NavLink>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="absolute top-[137px] left-0 w-full bg-black flex flex-col items-center gap-4 py-4 md:hidden z-10">
          <NavLink to="/" className="text-white text-xl font-medium hover:text-cyan-400" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/faqs" className="text-white text-xl font-medium hover:text-cyan-400" onClick={() => setIsOpen(false)}>FAQs</NavLink>
          <NavLink to="/register" className="text-white text-xl font-medium hover:text-cyan-400" onClick={() => setIsOpen(false)}>Register</NavLink>
          <NavLink to="/admin" className="text-white text-xl font-medium hover:text-cyan-400" onClick={() => setIsOpen(false)}>Admin</NavLink>
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;
