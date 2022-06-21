import "./Buttons.css";

import React from "react";

function Reset() {
    return (
        <div>
            <button className="reset" value={"reset"}>
                Reset
            </button>
            <button className="play" value={"play"}>
                Play
            </button>
            <button className="cross_type" value={"X"}>
                X
            </button>
            <button className="o_type" value={"O"}>
                O
            </button>
        </div>
    );
}

export default Reset;
