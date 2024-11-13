"use client";
import { FC } from "react";
import scss from "./AboutCourses.module.scss";
import { useGetCoursesDetailsQuery } from "@/redux/api/skillz";
import { useParams } from "next/navigation";
import Image from "next/image";

const AboutCourses: FC = () => {
  const { id } = useParams();
  const coursesId = Number(id);

  const { data: course } = useGetCoursesDetailsQuery(coursesId);
  if (!course) {
    return (
      <div className={scss.loading}>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <section className={scss.AboutCourses}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.imageContainer}>
            <Image
              src={course.image}
              alt={course.name}
              width={600}
              height={400}
              className={scss.courseImage}
            />
          </div>
          <div className={scss.details}>
            <h1 className={scss.courseName}>{course.name}</h1>
            <p className={scss.author}>by {course.author}</p>
            <p className={scss.price}>Price: ${course.price.toFixed(2)}</p>
            <p className={scss.description}>{course.description}</p>
            <div className={scss.locationDate}>
              <p>
                <strong>City:</strong> {course.city}
              </p>
              <p>
                <strong>Created:</strong>{" "}
                {new Date(course.created_date).toLocaleDateString()}
              </p>
              <p>
                <strong>Last Updated:</strong>{" "}
                {new Date(course.updated_date).toLocaleDateString()}
              </p>
            </div>
            <button className={scss.enrollButton}>Enroll Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourses;
