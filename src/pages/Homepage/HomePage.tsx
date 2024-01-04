import { useState } from "react";
import ReactPageScroller from "react-page-scroller";

import BannerSection from "./BannerSection/BannerSection";
import VeChungToiSection from "./VeChungToiSection/VeChungToiSection";
import ListSectionBar from "@/components/ListSectionBar/ListSectionBar";

// https://github.com/VikLiegostaiev/react-page-scroller/tree/master

const homeSections = [
  {
    name: "Banner section",
    href: "#banner",
  },
  {
    name: "Ve chung toi section",
    href: "#ve-chung-toi",
  },
];

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  // Core change page here: handlePageChange
  const handlePageChange = (number: number) => {
    setCurrentPage(number);
  };

  const handleBeforePageChange = (number: number) => {
    console.log("page Next", number);
  };

  // TO-DO: add ListSectionBar
  return (
    <div className="w-full h-full relative">
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
        containerHeight={"100vh"}
      >
        <BannerSection />
        <VeChungToiSection />
        <BannerSection />
      </ReactPageScroller>

      <div style={{ position: "absolute", right: "2rem", top: "100px" }}>
        <ListSectionBar
          listSection={homeSections}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default HomePage;
