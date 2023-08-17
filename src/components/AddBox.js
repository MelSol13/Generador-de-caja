import React, { useState } from "react";

const AddBox = (props) => {
    const [box, setBox] = useState([]);
    const [boxColor, setBoxColor] = useState("red");
    const [boxSize, setBoxSize] = useState("100");
    const [val, setVal] = useState();

    const increaseBoxes = (e) => {
        e.preventDefault();
        const boxStyle = {
            width: boxSize + "px",
            height: boxSize + "px",
            background: boxColor,
            border: "1px black solid",
            display: "inline-block",
            margin: "5px",
        };

        const newBox = <div style={boxStyle}></div>;
        setBox([...box, newBox]);
    };
    const handleColorInput = (e) => {
        setVal(e.target.value);
        setBoxColor(e.target.value);
    };
    const resetInput = () => {
        // e.preventDefault();
        setVal("");
    };

    const handleSizeInput = (e) => {
        setBoxSize(e.target.value);
    };

    return (
        <div className="row g-4 align-items-center">
            <form onSubmit={increaseBoxes}>
                <div className="col-auto">
                    <label className="col-form-label">Color</label>
                </div>
                <div className="col-auto">
                    <input type="text" value={val} onChange={handleColorInput}></input>
                    <div className="col-auto">
                        <label className="col-form-label">Size</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" onChange={handleSizeInput}></input>
                    </div>
                </div>
                <div className="col-auto">
                    <button type="submit" class="btn btn-primary" onClick={resetInput}>
                        Add box!
                    </button>
                </div>
            </form>

            {box}
        </div>
    );
};
export default AddBox;