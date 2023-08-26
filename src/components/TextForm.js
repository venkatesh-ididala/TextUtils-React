import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UpperCase", "success");
  };
  const handleLowClick = () => {
    //console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase", "success");
  };
  const handleClearClick = () => {
    //console.log("uppercase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleCopy = () => {
    console.log("i am copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };
  //regex expression
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("enter the text here");
  // text = "new text"; //wrong way to change the state
  // setText("newtext"); //correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      ></div>
      <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
        {props.heading}
      </h2>
      <div className="mb-3">
        <textarea
          className="form-control "
          id="mybox"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
          }}
          rows="8"
        ></textarea>
        <br />

        <button className="btn btn-primary " onClick={handleUpClick}>
          convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          copy text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove spaces
        </button>
      </div>
      <div
        className="container my-6  "
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "enter something in the text box above to preview it here"}
        </p>
      </div>
    </>
  );
}
