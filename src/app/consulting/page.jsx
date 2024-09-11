import React from "react";
import Conultingmain from "./consultingmain/Conultingmain";
import Navbar from "../component/navbar/Navbar";
import MobileApp from "./mobileApp/MobileApp";
import DesignConsulting from "./designConsulting/DesignConsulting";
import DontTake from "./dontTake/DontTake";
import Lestcheatfooter from "../component/Lestcheatfooter/Lestcheatfooter";

const page = () => {
  return (
    <div>
      <Navbar />
      <Conultingmain />
      <MobileApp />
      <DesignConsulting/>
      <DontTake/>
      <Lestcheatfooter/>
    </div>
  );
};

export default page;
