import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    // console.log("UpperCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleCopy = () => {
    // let text = document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  const handleClearClick = () => {
    // console.log("UpperCase was Clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Chanhe");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // const [text, setText] = useState('Enter text here1');
  // // //setText("Hello Raj");//correct way to usestate change value// // //
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className='mb-4'>{props.heading} </h1>
        <div className="mb-3">
          {/* <label for="myBox" className="form-label">Enter Your Text </label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert toUpperCase
        </button>
        <button disabled={text.length===0}
          className="btn btn-outline-primary mx-1"
          onClick={handleLoClick}
        >
          Convert toLowerCase
        </button>
        {/* <button className="btn btn-primary mx-1" onClick={handleCaptelClick}> Convert Capitalize</button>  */}
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button disabled={text.length===0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Word and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length}Minutes Read</p>
        <h2>Previwe</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}

//video 15 till.
// import React , {useState} from 'react'

// export default function TextForm(props) {
//   const handleUpClick = () => {
//     // console.log("UpperCase was Clicked" + text);
//     let newText = text.toUpperCase();
//     setText(newText);
//     props.showAlert("Converted to Uppercase!", "success");
//   }

//   const handleLoClick = () => {
//     // console.log("UpperCase was Clicked" + text);
//     let newText = text.toLowerCase();
//     setText(newText);
//     props.showAlert("Converted to Lowercase!", "success");
//   }
//   const handleCopy = () =>{
//     let text =document.getElementById("myBox");
//     text.select();
//     navigator.clipboard.writeText(text.value);
//     props.showAlert("Copied to Clipboard", "success");
//   }

// const handleExtraSpace = () => {
//   let newText = text.split(/[ ]+/);
//        setText(newText.join(" "));
//        props.showAlert("Extra Spaces Removed", "success");
// }

//    const handleClearClick = () => {
//     // console.log("UpperCase was Clicked" + text);
//     let newText = "";
//     setText(newText);
//     props.showAlert("Text Cleared!", "success");
//   }

//   const handleOnChange = (event) => {
//     // console.log("On Chanhe");
//     setText(event.target.value);
//   }

//   const [text, setText] = useState('');
//   // const [text, setText] = useState('Enter text here1');
//   // // //setText("Hello Raj");//correct way to usestate change value// // //
//   return (
//     <>

//     <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
//      <h1>{props.heading} </h1>
//       <div className="mb-3">
//             {/* <label for="myBox" className="form-label">Enter Your Text </label> */}
//           <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'gray':'white',
//           color:props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
//         </div>
//         <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert toUpperCase</button>
//         <button className="btn btn-outline-primary mx-1" onClick={handleLoClick}>Convert toLowerCase</button>
//         {/* <button className="btn btn-primary mx-1" onClick={handleCaptelClick}> Convert Capitalize</button>  */}
//         <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
//         <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
//         <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
//     </div>

//     <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
//        <h2>Your Text Summary</h2>
//        <p>{text.split (" ").filter((element) =>{return element.length!==0}).length}.length} Word and {text.length} characters</p>
//        <p>{0.008 * text.split (" ").length}Minutes Read</p>
//        <h2>Previwe</h2>
//        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
//     </div>

//     </>
//   )
// }
