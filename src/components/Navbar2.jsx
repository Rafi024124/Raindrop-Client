import { FiChevronDown, FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* LEFT — LOGO */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/wateraid.jpg"
            alt="WaterAid"
            className="w-28"
          />
        </div>

        {/* CENTER MENU */}
        <ul className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-[#0B2B4A]">

          {/* Dropdown item */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 justify-center">
              <div className="flex flex-col leading-tight text-center">
      <span>Why</span>
      <span className="flex gap-2">WaterAid? <FiChevronDown /></span>
    </div>
            </div>
            {/* Dropdown */}
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md p-4 rounded-md w-48">
              <p className="py-1 hover:text-[#0070C9] cursor-pointer">Our Mission</p>
              <p className="py-1 hover:text-[#0070C9] cursor-pointer">Our Vision</p>
              <p className="py-1 hover:text-[#0070C9] cursor-pointer">Impact</p>
            </div>
          </li>

          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              Programmes <FiChevronDown />
            </div>
          </li>

          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              Get involved <FiChevronDown />
            </div>
          </li>

          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              Publications <FiChevronDown />
            </div>
          </li>
        </ul>

        {/* RIGHT SIDE — TAGS + SEARCH */}
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#0B2B4A]">

          <span className="cursor-pointer hover:text-[#0070C9]">Toilet Conference 2025</span>
          <span className="cursor-pointer hover:text-[#0070C9]">WASHBudget</span>
          <span className="cursor-pointer hover:text-[#0070C9]">Pothe Holo Dekha</span>
          <span className="cursor-pointer hover:text-[#0070C9]">BLUE</span>

          <FiSearch size={22} className="cursor-pointer hover:text-[#0070C9]" />
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden">
          <FiSearch size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
