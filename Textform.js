import React, {useState} from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';



export default function Textform(props) {

    const hendleUpClick = ()=>
    {
        // console.log("UpperCase Was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("convert to Uppercase","success");
    }

    const hendleLoClick = ()=>
    {
        // console.log("UpperCase Was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("convert to Lowercase","success");
    }

    const hendleClearClick = ()=>
    {
        let newText = '';
        setText(newText)
        props.showAlert("Clear successfully","success");
    }

    const hendleOnClick = (event)=>
    {
        // console.log("On change");
        setText(event.target.value);
       
       
    }

    const hendleCopy =()=>{
        
        navigator.clipboard.writeText(text);

        props.showAlert("Copy successfully","success");

    }

    const hendleExtraSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove successfully","success");
    }

    const [text, setText] = useState('');

    // text = "New text"; wrong way to change text
    // setText = ("new text"); correct way to set text here
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={hendleOnClick} style={{backgroundColor: props.mode==='dark'?'#3b5162':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className=' btn btn-success mx-2 my-1' onClick={hendleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className=' btn btn-success mx-2 my-1' onClick={hendleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className=' btn btn-success mx-2 my-1' onClick={hendleClearClick}>Clear text</button>
            <button disabled={text.length===0} className=' btn btn-success mx-2 my-1' onClick={hendleCopy}>Copy text</button>
            <button disabled={text.length===0} className=' btn btn-success mx-2 my-1' onClick={hendleExtraSpace}>Remove spcae</button>
        </div>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summery</h1>
            <p>{text.split(/\s+/).filter((element) => { return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => { return element.length!==0}).length}munites to reads</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter to somthing for preview"}</p>
        </div>
        </>
    )
}