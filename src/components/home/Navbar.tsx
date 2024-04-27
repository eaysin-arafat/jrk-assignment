const Navbar = () => {
  return (
    <div className="flex justify-between px-6 my-3">
      <img src="/icons/icon.png" width="35" alt="" />

      <div className="flex items-center gap-2.5">
        <ul className="flex items-center justify-center gap-2 capitalize font-medium text-[5px]">
          <li>Home</li>
          <li>Products</li>
          <li>Service</li>
          <li className="bg-greenBgColor px-2.5 rounded-full text-whiteColor py-[2px]">
            Login
          </li>
        </ul>

        <div className="relative">
          <img src="/icons/dalibary.png" width="13" alt="" />
          <span className="absolute top-0 right-0 h-1.5 w-1.5 bg-greenBgColor rounded-full text-white text-[4px] flex items-center justify-center">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
