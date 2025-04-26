import React from "react";
import style from "./Options.module.css";

function Options({ options, total, handleFeedback, handleReset }) {
  return (
    <div className={style.containerBtn}>
      {options.map((option) => {
        return (
          <button key={option} onClick={() => handleFeedback(option)}>
            {option}
          </button>
        );
      })}
      {total > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}

export default Options;
