import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import {
    AiOutlineHome,
    AiOutlineAlignLeft,
    AiOutlineCustomerService,
    AiOutlineUser,
    AiOutlineClose,
    AiOutlineMenu
  } from "react-icons/ai";

const Linkbox = (props) => {
    return (
        <div>
            <div id={props.id} className="linkbox maxw-400">
                <div className="linkbox-link">
                    {/* <span class="icon"><AiFillHome /></span> */}
                    <a href={props.url} target="_blank">{props.title}</a>
                </div>
            </div>
        </div>

    );
};

export default Linkbox;