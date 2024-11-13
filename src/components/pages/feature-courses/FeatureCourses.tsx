"use client";
import { FC } from "react";
import scss from "./FeatureCourses.module.scss";

import Image from "next/image";
import { useGetCoursesQuery } from "@/redux/api/skillz";
import { useRouter } from "next/navigation";

const FeatureCourses: FC = () => {
  const { data } = useGetCoursesQuery();

  const router = useRouter();
  return (
    <section id="courses" className={scss.FeatureCourses}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1>Featured Courses</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <button>View all courses</button>
          </div>
          <div className={scss.cardsContainer}>
            {data?.map((el) => (
              <div
                onClick={() => router.push(`/courses/${el.id}`)}
                key={el.id}
                className={scss.card}
              >
                <Image width={391} height={196} src={el.image} alt="" />
                <h5>How to Increase Your Engagement on Instagram</h5>
                <p>Katie Murphy</p>
                <h5>$ 59.99 USD</h5>
                <a href="#">Learn more</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCourses;
