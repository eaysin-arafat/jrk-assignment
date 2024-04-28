import useWindow from "../../hooks/useWindow";
import SectionLayout from "../../layout/SectionLayout";

const Navbar = () => {
  // Using the useWindow hook to track window width breakpoints
  const w1024 = useWindow(1024); // Boolean indicating if the window width is 1024px or more
  const w768 = useWindow(768);

  return (
    <SectionLayout className="flex justify-between my-3 lg:my-4">
      {/* Logo */}
      <img
        src="/icons/icon.png"
        width={w768 ? "40" : w1024 ? "50" : "60"} // Dynamic width based on window width
        alt=""
      />

      <div className="flex items-center gap-2.5 md:gap-5">
        {/* Navigation links */}
        <ul className="flex items-center justify-center gap-2 md:gap-5 capitalize font-medium text-[7px] md:text-[11px] lg:text-[15px]">
          <li className="hover:text-greenTextColor cursor-pointer">Home</li>
          <li className="hover:text-greenTextColor cursor-pointer">Products</li>
          <li className="hover:text-greenTextColor cursor-pointer">Service</li>
          {/* Navbar active link */}
          <li className="bg-greenBgColor hover:bg-[#3b6a59] px-3 rounded-full text-whiteColor py-[1px] transition-all pt-[2px]">
            Login
          </li>
        </ul>

        {/* Cart icon */}
        <div className="relative">
          <img
            src="/icons/dalibary.png"
            width={w768 ? "13" : w1024 ? "15" : "20"}
            alt=""
          />
          {/* Cart counter */}
          <span className="absolute top-0 lg:top-[-3px] right-0 h-1.5 md:h-2 lg:h-2.5 w-1.5 md:w-2 lg:w-2.5 bg-greenBgColor rounded-full text-white text-1 md:text-[5px] lg:text-[6px] flex items-center justify-center">
            0
          </span>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Navbar;
