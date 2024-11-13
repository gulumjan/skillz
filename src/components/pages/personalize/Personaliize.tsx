"use client";
import { FC, useEffect, useRef } from "react";
import scss from "./Personalize.module.scss";
import Image from "next/image";
import img from "@/../images/IMAGE (5).png";

const Personaliize: FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(scss.animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section className={scss.Personalize}>
      <div className="container">
        <div className={`${scss.content} ${scss.lazyLoad}`} ref={contentRef}>
          <Image
            width={620}
            height={564}
            src={img}
            alt="Personalized Learning"
          />
          <div className={scss.text}>
            <h1>Get personalized learning recommendations</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, <br /> purus sit amet luctus venenatis, lectus magna
              fringilla urnaLorem <br />
              ipsum dolor sit amet.
            </p>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personaliize;
