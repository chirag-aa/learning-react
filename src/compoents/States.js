import React,{useState} from 'react'

function States() {
    const[text,setText]=useState('');
    
    const handleChange=(event)=>{
        setText(event.target.value);
    }
    const doUpperCase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const doLowerCase=()=>{
           let newText=text.toLowerCase();
           setText(newText);
    }
    const ClearText=()=>{
        let newText='';
        setText(newText);
    }
    return (
        <>
        <div className='container my-3'>
           <textarea className="form-control" placeholder="Enter Text Here" value={text} onChange={handleChange} rows="8"></textarea>
           <button type='submit'  className='btn btn-primary my-3' onClick={doUpperCase}>Convert To UpperCase</button> 
           <button type='submit'  className='btn btn-primary my-3 mx-3' onClick={doLowerCase}>Convert To LowerCase</button> 
           <button type='submit' className='btn btn-warning my-3 mx-3' onClick={ClearText} >Clear Text</button>
           <h2>
               Text Summary
           </h2>
           <p>{text.length} Characters</p>
           <p>{text.split(' ').length} Words</p>
           <h2>Preview</h2>
           <p>{text}</p>
        </div>
        </>
    );
}

export default States
