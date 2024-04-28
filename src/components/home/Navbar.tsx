import useWindow from "../../hooks/useWindow";

const Navbar = () => {
  // Using the useWindow hook to track window width breakpoints
  const w1024 = useWindow(1024); // Boolean indicating if the window width is 1024px or more
  const w768 = useWindow(768); // Boolean indicating if the window width is 768px or more

  return (
    <div className="flex justify-between px-6 lg:px-36 my-3">
      {/* Logo */}
      <img
        src="/icons/icon.png"
        width={w768 ? "35" : w1024 ? "40" : "45"} // Dynamic width based on window width
        alt=""
      />

      <div className="flex items-center gap-2.5 md:gap-5">
        {/* Navigation links */}
        <ul className="flex items-center justify-center gap-2 md:gap-5 capitalize font-medium text-[7px] md:text-[9px] lg:text-[11px]">
          <li>Home</li>
          <li>Products</li>
          <li>Service</li>
          <li className="bg-greenBgColor px-2.5 rounded-full text-whiteColor py-[2px]">
            Login
          </li>
        </ul>

        {/* Cart icon */}
        <div className="relative">
          <img
            src="/icons/dalibary.png"
            width={w768 ? "13" : w1024 ? "13" : "17"}
            alt=""
          />
          {/* Cart counter */}
          <span className="absolute top-0 right-0 h-1.5 w-1.5 bg-greenBgColor rounded-full text-white text-[4px] flex items-center justify-center">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
