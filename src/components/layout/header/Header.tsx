"use client";
import { FC } from "react";
import scss from "./Header.module.scss";
import logoImg from "@/../images/IMAGE.png";
import { useRouter } from "next/navigation";
import { BsCartCheck } from "react-icons/bs";

const Header: FC = () => {
  const router = useRouter();
  return (
    <header className={scss.Header}>
      <div className={scss.topBanner}>
        <p>One week only—50% off all courses with code 50OFF at checkout</p>
      </div>
      <div className={scss.navContainer}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.logo} onClick={() => router.push(`/`)}>
              <h2>Skilz</h2>
            </div>
            <nav className={scss.nav}>
              <a href="#courses">Courses</a>
              <a href="#workshops">Free Workshops</a>
              <a href="#articles">Articles</a>
              <a className={scss.empty} href="#">
                About
              </a>
              <a className={scss.empty} href="#">
                Contact
              </a>
            </nav>
            <div className={scss.cartIcon}>
              <i className={scss.cart_icon}>
                <BsCartCheck />
              </i>
              <span className={scss.cartCount}>0</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
