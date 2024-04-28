import useWindow from "../../hooks/useWindow";
import SocialIcon from "../btn/SocialIcon";

const Footer = () => {
  // Using the useWindow hook to track window width breakpoints
  const w1024 = useWindow(1024); // Boolean indicating if the window width is 1024px or more
  const w768 = useWindow(768); // Boolean indicating if the window width is 768px or more

  return (
    <div className="bg-greenTextColor text-whiteColor py-2 pb-4 px-6 lg:px-36">
      {/* Footer navigation links */}
      <ul className="flex items-center justify-center gap-1 text font-medium">
        <li>Privacy Policy</li>
        <span className="footerOptionLine"></span>

        <li>Terms of service</li>
        <span className="footerOptionLine"></span>

        <li>Accessibility</li>
        <span className="footerOptionLine"></span>

        <li>Contact Us</li>
      </ul>

      {/* Horizontal line */}
      <div className="bg-whiteColor h-[.5px] my-1 mb-2"></div>

      {/* App store and Google Play icons */}
      <div className="flex justify-center items-center gap-2">
        <img
          width={w768 ? "40" : w1024 ? "80" : "70"} // Dynamic width based on window width
          src="/footer/app-store.png"
          alt="App Store"
        />
        <img
          width={w768 ? "40" : w1024 ? "80" : "70"}
          src="/footer/google-play.png"
          alt="Google Play"
        />
      </div>

      {/* Follow us section */}
      <div className="flex flex-col items-center justify-center gap-1 mt-2">
        <h2 className="font-medium uppercase text-center text-[8px] md:text-[10px] lg:text-[12px]">
          Follow us
        </h2>
        {/* Social media icons */}
        <ul className="flex gap-1.5">
          <SocialIcon
            icon="/icons/social-accounts/facebook.png"
            alt="facebook"
            width="5"
          />
          <SocialIcon
            icon="/icons/social-accounts/instagram.png"
            alt="instagram"
          />
          <SocialIcon icon="/icons/social-accounts/twitter.png" alt="twitter" />
          <SocialIcon icon="/icons/social-accounts/linkdin.png" alt="linkdin" />
        </ul>

        {/* Footer text */}
        <p className="text text-center">
          © 2022 Designed & Developed by Kabbik
        </p>
      </div>
    </div>
  );
};

export default Footer;
