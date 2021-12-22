
import React, {useState} from 'react'

function Nav(props) {
    const[mode,setMode]=useState({
        backgroundColor:'white',
        color:'black'
    });
    const[toggleText,setToggleText]=useState('Enable Dark Mode');
    const modeHandler=(e)=>{
        e.preventDefault();
        if(mode.backgroundColor==='white'){
            setMode({
                backgroundColor:'black',
                color:'white' 
            });
            document.body.style.backgroundColor='gray';
            setToggleText('Enable Light Mode');
        }
        else if(mode.backgroundColor==='black'){
            setMode({
                backgroundColor:'white',
                color:'black'
            });
            document.body.style.backgroundColor='white';
            setToggleText('Enable Dark Mode');
        }
    }
    return (
        <nav className="navbar navbar-expand-lg" style={mode}>
            <div className="container-fluid">
                <a className="navbar-brand" style={mode} href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" style={mode} aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={mode} href="/">About</a>
                        </li>
                        </ul>
                    </div>    
                        <form className="d-flex">
                            <button className='btn btn-outline-success' onClick={modeHandler}>{toggleText}</button>
                        </form>
                    
               
            </div>
        </nav>
    )
}

export default Nav
