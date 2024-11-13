import React from "react";
import PlatForm from "./platform/PlatForm";
import FeatureCoures from "./feature-courses/FeatureCourses";
import Personaliize from "./personalize/Personaliize";
import Workshops from "./workshops/Workshops";
import ResentArticles from "./recentArticles/ResentArticles";
import Star from "./star/Star";

const HomePage = () => {
  return (
    <>
      <PlatForm />
      <FeatureCoures />
      <Personaliize />
      <Workshops />
      <Star />
      <ResentArticles />
    </>
  );
};

export default HomePage;
