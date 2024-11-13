"use client";
import { FC } from "react";
import scss from "./ResentArticles.module.scss";
import img from "@/../images/IMAGE (6).png";
import Image from "next/image";
import { useGetArticlesQuery } from "@/redux/api/skillz";
import { useRouter } from "next/navigation";

const ResentArticles: FC = () => {
  const { data } = useGetArticlesQuery();
  const router = useRouter();
  return (
    <section id="articles" className={scss.Workshops}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1>Resent Articles</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <button>View All Articles</button>
          </div>
          <div className={scss.cardsContainer}>
            {data?.map((el) => (
              <div
                onClick={() => router.push(`/articles/${el.id}`)}
                key={el.id}
                className={scss.card}
              >
                <Image width={391} height={196} src={el.image} alt="" />
                <h5>{el.created_date}</h5>
                <p>{el.name}</p>
              </div>
            ))}
            <div className={scss.card}>
              <Image width={391} height={196} src={img} alt="" />
              <h5>January 31,2021</h5>
              <p>iPhone Photography: Tips, Tricks, and Best Practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResentArticles;
