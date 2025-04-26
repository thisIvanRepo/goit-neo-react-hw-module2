import { useEffect, useState } from "react";
import "./App.css";
import Descriptions from "./components/Descriptions/Descriptions";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem("reviews");
    return saved
      ? JSON.parse(saved)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const totalFeedback = calculateRevs(reviews);

  const updateFeedback = (feedbackType) => {
    setReviews((prevRev) => ({
      ...prevRev,
      [feedbackType]: prevRev[feedbackType] + 1,
    }));
  };

  const resetRev = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  function calculateRevs(revs) {
    return Object.values(revs).reduce((total, value) => total + value, 0);
  }

  return (
    <>
      <Descriptions />
      <Options
        options={Object.keys(reviews)}
        total={totalFeedback}
        handleFeedback={updateFeedback}
        handleReset={resetRev}
      />
      <Feedback
        good={reviews.good}
        bad={reviews.bad}
        neutral={reviews.neutral}
        total={totalFeedback}
      />
    </>
  );
}

export default App;
