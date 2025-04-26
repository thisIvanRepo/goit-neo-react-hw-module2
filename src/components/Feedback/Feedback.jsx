import React from "react";
import style from "./Feedback.module.css";

function Feedback({ good, neutral, bad, total }) {
  const positiveRev =
  total > 0 ? Math.round((good / total) * 100) : 0;

  return (
    <>
      {total === 0 ? (
        <p className={style.atentionText}>No feedbak yet</p>
      ) : (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive: {positiveRev}%</li>
        </ul>
      )}
    </>
  );
}

export default Feedback;
