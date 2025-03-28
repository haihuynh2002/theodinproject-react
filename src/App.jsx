import React, { useState } from "react";

import GeneralInfromation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";

function App() {
  const [person, setPerson] = useState(() => ({firstName: '', lastName: '', age: 18}));

  return (
    <>
      <GeneralInfromation />
      <hr />
      <EducationalExperience />
      <hr />
      <PracticalExperience />
    </>
  )
  
}

export default App;
