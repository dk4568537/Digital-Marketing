import React from "react";
import Navbar from "../component/navbar/Navbar";
import DigitalMarketing from "./digitalMarketing/DigitalMarketing";
import WeOfferPremium from "./weOfferPremium/WeOfferPremium";
import IgniteYourBusiness from "./igniteYourBusiness/IgniteYourBusiness";
import Empowering from "./empowering/Empowering";
import WEUndersend from "./weUndersend/WEUndersend";
import Techonology from "./techonology/Techonology";
import OurLocation from "../component/ourLocation/OurLocation";
import Lestcheatfooter from "../component/Lestcheatfooter/Lestcheatfooter";

const page = () => {
  return (
    <div>
      <Navbar />
      <DigitalMarketing />
      <WeOfferPremium />
      <IgniteYourBusiness />
      <Empowering />
      <WEUndersend />
      <Techonology />
      <OurLocation />
      <Lestcheatfooter />
    </div>
  );
};

export default page;
