"use client";
import { FC } from "react";
import scss from "./AboutWorkShops.module.scss";
import { useGetWorkShopsDetailsQuery } from "@/redux/api/skillz";
import { useParams } from "next/navigation";
import Image from "next/image";

const AboutWorkShops: FC = () => {
  const { id } = useParams();
  const coursesId = Number(id);

  const { data: course } = useGetWorkShopsDetailsQuery(coursesId);
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
              src="https://thumbs.dreamstime.com/b/illustration-workshop-icon-isolated-over-white-background-60974892.jpg"
              alt={course.name}
              width={600}
              height={400}
              className={scss.courseImage}
            />
          </div>
          <div className={scss.details}>
            <h1 className={scss.courseName}>{course.name}</h1>
            <p className={scss.author}>by {course.author}</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              officia natus provident velit necessitatibus, reiciendis quam
              sapiente? Hic eligendi, consequatur similique eos dicta aperiam
              pariatur ab perspiciatis, in nulla delectus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, vel
              quam, exercitationem veniam doloribus, maiores cupiditate atque
              quos quia iste accusamus quibusdam pariatur illum velit!
              Reprehenderit ducimus iusto animi est ea eaque sequi atque debitis
              voluptatum id, adipisci distinctio autem velit soluta. Nemo,
              impedit laboriosam!
            </p>
            <div className={scss.locationDate}>
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

export default AboutWorkShops;
