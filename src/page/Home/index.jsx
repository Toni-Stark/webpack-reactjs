import React from "react";
import "./index.scss";
const small = require("../../static/logo/small.jpg").default;

export const Home = (props) => {
    return (
        <div className="homeModule">
            <img src={small} style={{width: 70, height: 70}}  alt={"无法显示"}/>
        </div>
    )
}