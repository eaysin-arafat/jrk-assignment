import SocialIcon from "../SocialIcon";

const Footer = () => {
  return (
    <div className="bg-greenTextColor text-whiteColor py-2 pb-4 px-6">
      <ul className="flex items-center justify-center gap-1 text-[5px] font-medium">
        <li>Privacy Policy</li>
        <span className="footerOptionLine"></span>

        <li>Terms of service</li>
        <span className="footerOptionLine"></span>

        <li>Accessibility</li>
        <span className="footerOptionLine"></span>

        <li>Contact Us</li>
      </ul>

      <div className="bg-whiteColor h-[.5px] my-1 mb-2"></div>

      <div className="flex justify-center items-center gap-2">
        <img src="/footer/app-store.png" width="50" alt="App Store" />
        <img width="50" src="/footer/google-play.png" alt="Google Play" />
      </div>

      <div className="flex flex-col items-center justify-center gap-1 mt-2">
        <h2 className="text-[6px] font-medium uppercase text-center">
          Follow us
        </h2>
        <ul className="flex gap-1.5">
          <SocialIcon
            icon="/icons/social-accounts/facebook.png"
            alt="facebook"
          />
          <SocialIcon
            icon="/icons/social-accounts/instagram.png"
            alt="instagram"
          />
          <SocialIcon icon="/icons/social-accounts/twitter.png" alt="twitter" />
          <SocialIcon icon="/icons/social-accounts/linkdin.png" alt="linkdin" />
        </ul>

        <p className="text text-center">
          © 2022 Designed & Developed by Kabbik
        </p>
      </div>
    </div>
  );
};

export default Footer;
