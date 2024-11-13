"use client";
import { FC } from "react";
import scss from "./Workshops.module.scss";
import { useGetWorkshopsQuery } from "@/redux/api/skillz";
import { useRouter } from "next/navigation";

const Workshops: FC = () => {
  const { data } = useGetWorkshopsQuery();
  const router = useRouter();
  return (
    <section id="workshops" className={scss.Workshops}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1>Upcoming Free Workshops</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <button>View all workshops</button>
          </div>
          <div className={scss.cardsContainer}>
            {data?.map((el) => (
              <div
                onClick={() => router.push(`/workshops/${el.id}`)}
                key={el.id}
                className={scss.card}
              >
                <h5>How to Increase Your Engagement on Instagram</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elementum facilisis leo.
                </p>
                <a href="#">Learn more</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
