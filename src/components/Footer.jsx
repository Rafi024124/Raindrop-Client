import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-b from-black to-[#000A3B] text-white px-6 md:px-20 py-12">
      
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="w-16 h-16" />
            <h1 className="text-3xl font-bold tracking-wide">
              RAIN<span className="text-[#26FF60]">DROP</span>
            </h1>
          </div>
          <p className="text-gray-300 mt-4 leading-relaxed">
            A visionary initiative promoting sustainable rainwater harvesting,
            conservation awareness, and community involvement.
          </p>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold text-[#26FF60] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[#26FF60]">Home</Link></li>
            <li><Link to="/faqs" className="hover:text-[#26FF60]">FAQs</Link></li>
            <li><Link to="/register" className="hover:text-[#26FF60]">Register</Link></li>
            <li><Link to="/admin" className="hover:text-[#26FF60]">Admin</Link></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold text-[#26FF60] mb-4">
            Contact Us
          </h3>
          <p className="text-gray-300">Email: info@raindrop.com</p>
          <p className="text-gray-300">Phone: +880 1234-567890</p>
          <p className="text-gray-300">Dhaka, Bangladesh</p>

          
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-[#26FF60] text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-[#26FF60] text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-[#26FF60] text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

      </div>

     
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} RAIN<span className="text-[#26FF60]">DROP</span>.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
