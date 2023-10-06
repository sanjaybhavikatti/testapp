import { useState } from "react";
import React from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("UpperCase was clicked!" +text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case", "success");
  };

  const handleLowClick = () => {
    //console.log("UpperCase was clicked!" +text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case", "success");
  };

  const handleOnChange = (events) => {
    //console.log("OnChange");
    setText(events.target.value);
  };

  const handleClearClick = (events) => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };

  const handleCopy = (events) => {
    // var text = document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges();
    // props.showAlert("Text copied!", "success");
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied!", "success");
  };

  const handleExtraSpaces = (events) => {
    var WithSpacetext = text.split(/[ ]+/);
    setText(WithSpacetext.join(" "));
    props.showAlert("Extra spaces cleared!", "success");
  };

  const [text, setText] = useState("");
  // text = 'this is a test text'; //wrong way to change state
  // setText('this is the new changed text'); //correct way to change state

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3 htmlFor="myBox" className="form-label mb-3">
          {props.heading}
        </h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="15"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#4a525b" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className={`btn btn-outline-${
            props.mode === "light" ? "dark" : "light"
          } mx-1 my-1`}
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-outline-${
            props.mode === "light" ? "dark" : "light"
          } mx-1 my-1`}
          onClick={handleLowClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-outline-${
            props.mode === "light" ? "dark" : "light"
          } mx-1 my-1`}
          onClick={handleCopy}
        >
          Click to copy entered text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-outline-${
            props.mode === "light" ? "dark" : "light"
          } mx-1 my-1`}
          onClick={handleExtraSpaces}
        >
          Remove extra space
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-outline-${
            props.mode === "light" ? "dark" : "light"
          } mx-1 my-1`}
          onClick={handleClearClick}
        >
          Clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your text summary</h3>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words, {text.length} charachters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h4>Text Preview</h4>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}
