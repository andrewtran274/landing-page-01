import React from "react";
import FeatureBox from "./FeatureBox";
import featureImage from "../assets/App Landing Template/images/feature_1.png";
import featureImage2 from "../assets/App Landing Template/images/feature_2.png";
import featureImage3 from "../assets/App Landing Template/images/feature_3.png";
const Feature = () => {
  return (
    <div id="features">
      <div className="a-container">
        <FeatureBox
          image={featureImage}
          title="Development Course"
        ></FeatureBox>
        <FeatureBox
          image={featureImage2}
          title="Money Saving Services"
        ></FeatureBox>
        <FeatureBox
          image={featureImage3}
          title="Usability Interface"
        ></FeatureBox>
      </div>
    </div>
  );
};

export default Feature;
