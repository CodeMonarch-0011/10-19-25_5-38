import "../../styles/ui.css";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { SliderContextFunction } from "../../context/slider";

export function Navbar() {
  const { openSlider } = SliderContextFunction();

  return (
    <div className="navbar">
      <div className="navbar-logo">Jay Harrington</div>

      <nav className="navbar-navigation">
        <a>Home</a>
        <a>About</a>
        <a>Filmography</a>
      </nav>

      <div className="navbar-icons">
        <span>
          <BiLogoGmail />
        </span>
        <span>
          <FaXTwitter />
        </span>
        <span>
          <FaFacebookF />
        </span>
      </div>

      <div className="navbar-menu-icon" onClick={openSlider}>
        <HiOutlineMenuAlt3 />
      </div>
    </div>
  );
}
