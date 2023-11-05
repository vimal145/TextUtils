import React from "react";


export default function About(props) {
   let myStyle ={
    color: props.mode === "dark"?"white":"black",
    backgroundColor: props.mode === "dark"?"rgb(36 74 104)":"white"
   }

    return (
        <div className="container p-3 pb-3 rounded" >
    
            <h1 className="my-3" style={{color: props.mode === "dark"?"white":"black"}}>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            <strong>
                                Analyze your text 
                            </strong>
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                          TextUtils gives you a way to analyze your text quickly and efficiently.and count word and characters.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            style={myStyle}
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                           <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a free to use platform.which provides you to count characters and manipulate them like you want.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            style={myStyle}
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                           <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                            This platform is browser compatible for all browser like chrome , firefox , safari.
                        </div>
                    </div>
                </div>
                {/* <div className="my-3 container">
                    <button onClick={toggleStyle} type="button" className=" btn btn-primary">
                        {btntext}
                    </button>
                </div> */}
            </div>
        </div>
    );
}
