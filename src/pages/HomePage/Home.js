import React from "react";
import { homeObjOne, urgence, landing, chatbot } from "./Data";
import { InfoSection } from "../../components";
import Services from "./servicesPage/Services";
import Opinions from "./opinionsPage/Opinions";
import Help from "./HelpPage/Help";



function Home() {
  return (
    <>


<InfoSection {...landing} />
      <Services></Services>
      
     <Help {...chatbot}/>
      <InfoSection {...chatbot} />
      <Opinions/>
    </>
  );
}

export default Home;
