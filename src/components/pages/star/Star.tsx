import { FC } from "react";
import scss from "./Star.module.scss";
import starIcon from "@/../images/Frame (5).png";
import personImage from "@/../images/Frame (6).png";
import Image from "next/image";

const Star: FC = () => {
  return (
    <section className={scss.Star}>
      <div className="container">
        <div className={scss.quoteSection}>
          <Image
            width={1020}
            height={33}
            src={starIcon}
            alt="Star Icon"
            className={scss.starIcon}
          />
          <p className={scss.quote}>
            “Kate’s courses are a game changer. She’s thorough, organized, and
            explains things in a no-nonsense way that makes it easy for
            anyone—beginners to experts—to learn something from her courses and
            take their game to the next level.”
          </p>
          <p className={scss.author}>James Brown, Influencer</p>
        </div>
        <div className={scss.profileSection}>
          <Image
            width={534}
            height={534}
            src={personImage}
            alt="Instructor"
            className={scss.profileImage}
          />
          <div className={scss.profileText}>
            <h2>A Passion for Teaching</h2>
            <p>
              A deep-dive on the Instagram algorithm, hashtags, content
              strategy, and branding.
            </p>
            <button className={scss.aboutButton}>ABOUT SKILLZ</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Star;
