import React, { useState } from "react";
import PromptsForm from "./PromptsForm";
import Story from "./Story";
import "./Madlib.css";
import Choices from "./Choices";

/** Madlib game:
 *
 * props:
 * - prompts: list of things to ask for: ["noun", "noun 2", "adjective"]
 * - template: story template, with placeholders in brackets
 *
 * state:
 * - answers: {noun: "car", "noun 2": "bike", "adjective": "red"}
 *
 */

function Madlib({ choices = Choices }) {
  const [answers, setAnswers] = useState(null);
  const [template, setTemplate] = useState(null);
  const [prompts, setPrompts] = useState([]);

  const clearState = () => {
    setAnswers(null);
    setTemplate(null);
    setPrompts([]);
  };
  
  const handleChange = (evt) => {
    clearState();
    let selectedOption = evt.target["value"];

    if (selectedOption !== "") {
      setTemplate(choices[selectedOption]["template"]);
      setPrompts(choices[selectedOption]["prompts"]);
    }
  };

  const options = Object.keys(choices);

  return (
    <div className="Madlib">
      <h1>Madlibs!</h1>

      <select required onChange={handleChange}>
        <option value="" key="pick">
          Pick a Story
        </option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>

      {answers ? (
        <Story
          answers={answers}
          template={template}
          restart={() => clearState()}
        />
      ) : (
        <PromptsForm prompts={prompts} finishPrompts={setAnswers} />
      )}
    </div>
  );
}

export default Madlib;
