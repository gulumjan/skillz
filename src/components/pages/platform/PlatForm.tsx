"use client";
import { FC } from "react";
import scss from "./PlatForm.module.scss";
import PlatImg from "@/../images/Frame (4).png";
import Image from "next/image";
import { useGetCoursesQuery } from "@/redux/api/skillz";
const PlatForm: FC = () => {
  return (
    <section className={scss.PlatForm}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <a href="#">Featured Course</a>
            <h1>
              Run your own online <br /> learning platform
            </h1>
            <p>
              A deep-dive on the Instagram algorythm, hashtags, content <br />{" "}
              strategy, and branding.
            </p>
            <p>Kathryn Murphy</p>
            <button>LEARN MORE</button>
          </div>
          <Image width={614} height={614} src={PlatImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default PlatForm;
