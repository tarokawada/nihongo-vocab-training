import React, { useState, useRef } from "react";

export default function Trial(props) {
  const { vocab, hiragana, meaning } = props;
  const [trainHiragana, setTrainHiragana] = useState("");
  const valueRef = useRef();
  const [rightOrWrong, setrightOrWrong] = useState(false);
  const meaningRef = useRef();
  const [trainMeaning, setTrainMeaning] = useState("");
  const [rightOrWrongMeaning, setrightOrWrongMeaning] = useState(false);

  const handleOnChange = e => {
    const { value } = e.target;
    setTrainHiragana(value);
    checkHiragana(valueRef.current.value);
  };

  const handleOnChangeMeaning = e => {
    const { value } = e.target;
    setTrainMeaning(value);
    checkMeaning(meaningRef.current.value);
  };

  const checkHiragana = value => {
    value == hiragana ? setrightOrWrong(true) : setrightOrWrong(false);
  };

  const checkMeaning = value => {
    meaning.includes(value)
      ? setrightOrWrongMeaning(true)
      : setrightOrWrongMeaning(false);
  };
  return (
    <div
      style={{
        border:
          rightOrWrong && rightOrWrongMeaning
            ? "green 3px solid"
            : "red 1px solid",
        padding: "16px",
      }}
    >
      <p>{vocab}</p>
      <label>Hiragana: </label>
      <input
        type="text"
        onChange={handleOnChange}
        value={trainHiragana}
        ref={valueRef}
      />
      <label>Meaning: </label>
      <input
        type="text"
        onChange={handleOnChangeMeaning}
        value={trainMeaning}
        ref={meaningRef}
      />
      <p>{rightOrWrong && rightOrWrongMeaning ? "Correct" : "Wrong"}</p>
    </div>
  );
}
