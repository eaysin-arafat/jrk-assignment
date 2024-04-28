import useWindow from "../../hooks/useWindow";
import SectionLayout from "../../layout/SectionLayout";

const Navbar = () => {
  // Using the useWindow hook to track window width breakpoints
  const w1024 = useWindow(1024); // Boolean indicating if the window width is 1024px or more
  const w768 = useWindow(768);

  return (
    <SectionLayout className="flex justify-between my-3">
      {/* Logo */}
      <img
        src="/icons/icon.png"
        width={w768 ? "40" : w1024 ? "50" : "55"} // Dynamic width based on window width
        alt=""
      />

      <div className="flex items-center gap-2.5 md:gap-5">
        {/* Navigation links */}
        <ul className="flex items-center justify-center gap-2 md:gap-5 capitalize font-medium text-[7px] md:text-[9px] lg:text-[11px]">
          <li className="hover:text-greenTextColor cursor-pointer">Home</li>
          <li className="hover:text-greenTextColor cursor-pointer">Products</li>
          <li className="hover:text-greenTextColor cursor-pointer">Service</li>
          {/* Navbar active link */}
          <li className="bg-greenBgColor hover:bg-[#3b6a59] px-2 rounded-full text-whiteColor py-[1px] transition-all pt-[2px]">
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
    </SectionLayout>
  );
};

export default Navbar;
