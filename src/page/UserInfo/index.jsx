import React from "react";
import "./index.less";
import styles from "./index.module.scss";

export const UserInfo = (props) => {
    return (
        <div className="user-info-module">
            UserInfo主页面
            <div className={styles.userinfo}>UserInfo主页面</div>
        </div>
    )
}