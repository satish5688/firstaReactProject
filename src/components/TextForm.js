// import { useState } from "react"
import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    console.log("upper case was clicked");
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("Lower case was clicked");
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleTiClick = () => {
      let word=text.toLowerCase()
      let words = word.split(" ");
      let titleWords = words.map(word => word[0].toUpperCase() + word.slice(1));
      let titleStr = titleWords.join(" ");
      setText(titleStr) 
  };

  const clearText=()=>{
    setText('')
  }

  const handleOnChange = (event) => {
    console.log("onchanged");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      {" "}
      <div style={{ color: `${props.Mode === "dark" ? "white" : "black"}` }}>
        <div
          className="mb-3 mt-5"
        >
          <label htmlFor="myBox" className="form-label">
            <h1>{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: `${props.Mode === "dark" ? "grey" : "white"}`,
              color: `${props.Mode === "dark" ? "white" : "black"}`
            }}
            placeholder='Add some text here'
          ></textarea>
          <button className="btn btn-primary mt-3 m-1" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button className="btn btn-primary mt-3 m-1" onClick={handleLoClick}>
            Convert to lowercase
          </button>
          <button className="btn btn-primary mt-3 m-1" onClick={handleTiClick}>
            Convert to titlecase
          </button>
          <button className="btn btn-primary mt-3 m-1" onClick={clearText}>
            Clear Text
          </button>
        </div>
        <div className="container">
          <h1>your text summery</h1>
          <p>
            {text.split(" ").length} word and {text.length} charectors are in
            you content
          </p>
          <p>
            {0.0076 * text.split(" ").length} Minutes requiered to Read this
            containt
          </p>
          <h2>Preview</h2>
          <p>{text.length>0?text:'Enter something in textbox to preview that here'}</p>
        </div>
      </div>
    </>
  );
}

export default TextForm;
