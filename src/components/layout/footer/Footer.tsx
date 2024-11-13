import { FC } from "react";
import scss from "./Footer.module.scss";
import {
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.newsletter}>
          <h3>You have the power to define your future.</h3>
          <form>
            <input type="email" placeholder="Email Address" />
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className={scss.footer_content}>
          <div className={scss.section}>
            <h4>Learning Platform</h4>
            <a href="#">Home</a>
            <a href="#">Courses</a>
            <a href="#">Free Workshops</a>
            <a href="#">Blog</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className={scss.section}>
            <h4>Template</h4>
            <a href="#">Instructions</a>
            <a href="#">Style Guide</a>
            <a href="#">Licenses</a>
            <a href="#">Changelog</a>
          </div>
          <div className={scss.section} style={{ alignItems: "center" }}>
            <h4>Follow Skillz</h4>
            <div className={scss.social}>
              <a href="#">
                <FaTiktok />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className={scss.copyright}>
          © Skillz Template Powered by Webflow
        </div>
      </div>
    </footer>
  );
};

export default Footer;
