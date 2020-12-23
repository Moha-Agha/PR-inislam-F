import React from "react";

import HeaderInfo from "./HeaderInfo"
import BannerPromotional from "./BannerPromotional"

const HeaderOfSection = ({ sectionInfo }) => {

  const {
    title,
    description
  } = sectionInfo;

  return (
    <div className="header-of-section">
      <HeaderInfo title={title} description={description} />
      <BannerPromotional TextTitle={'دعم الموقع'} TextBody={'تطوير ألية عمل الموقع وتمويل البحوث الجديدة يحتاج دعمك'} />
    </div>
  );

};

export default HeaderOfSection;
