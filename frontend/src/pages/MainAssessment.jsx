import React, { useState } from "react";
import AssessmentBubble from "./AssessmentBubble";
import Assessment from "../components/Assessment";

import StartAssessmentPopUp from "./StartAssessmentPopUp"; 
const MainAssessment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showStartPopup, setShowStartPopup] = useState(true); 
  return (
    <>
      {/* Show this only when popup is active */}
      {showStartPopup && (
        <StartAssessmentPopUp onClose={() => setShowStartPopup(false)} />
      )}

      {/* Show the actual assessment ONLY after popup is closed */}
      {!showStartPopup && (
        <>
          <AssessmentBubble currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <Assessment currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
      )}
    </>
  );
};

export default MainAssessment;
