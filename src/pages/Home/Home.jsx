import React, { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";
import BrowseCategories from "./BrowseCategories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback="loading">
        <BrowseCategories></BrowseCategories>
        <HotJobs></HotJobs>
      </Suspense>
    </div>
  );
};

export default Home;
