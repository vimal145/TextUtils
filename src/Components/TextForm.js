import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleSentenceCaseClick = () => {
        let words = text.split(" ");
        let newText = '';

        for (let i = 0; i < words.length; i++) {
            let text = words[i];

            if (i > 0) {
                newText += ' '; // Add a space before all words except the first one
            }

            let firstChar = text.slice(0, 1);
            let upperCaseFirstChar = firstChar.toUpperCase();
            let restOfChars = text.slice(1).toLowerCase();

            newText += upperCaseFirstChar + restOfChars;
        }

        setText(newText);
        props.showAlert("Converted to Sentence case", "success");

    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");

    }
    const handleCopy = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");

    }
    const handleOnChange = (event) => {
        console.log("uppercase is clicked");
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    // text = "new text"; // wrong way to change the text
    // setText("new text"); // correct  way to change the text
    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "#13466e" : "white", color: props.mode === "dark" ? "white" : "black" }} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={handleUpClick}>UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={handleLoClick}>LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={handleSentenceCaseClick}>SentenceCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={handleCopy}>Copy</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={handleExtraSpaces}>Remove extra spaces</button>
                <button disabled={text.length===0} className="btn btn-danger mx-2 my-2 " onClick={handleClearClick}>CLEAR TEXT</button>
            </div>
            <div className="container my-1" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1>Your Text summary </h1>
                <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words , {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length} Minutes to read this</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter text to get preview it here"}</p>
            </div>
        </>
    )
}

