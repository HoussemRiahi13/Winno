import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne, homeObjThree, homeObjTwo } from "./Data";

function Services() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Services;
