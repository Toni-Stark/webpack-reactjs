import React from "react";
import { Home } from "./page/Home/index";
import { UserInfo } from "./page/UserInfo";

export const App = () => {
    return (
        <div style={{alignItems: "center"}}>
            <Home />
            <UserInfo />
        </div>
    )
}