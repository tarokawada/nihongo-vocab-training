import React from "react";
import data from "../data/levelOne.json";
import Trial from "../components/Trial";

export default () => {
  return (
    <div>
      {data.map(word => {
        return <Trial {...word} key={word.vocab} />;
      })}
    </div>
  );
};
