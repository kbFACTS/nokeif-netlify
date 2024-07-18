import React from "react";

// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link,
//   } from "react-router-dom";

import Linkbox from "./linkbox";

// import {
//     AiFillCustomerService,
//     AiFillHome
//   } from "react-icons/ai";
// import { blue, grey } from "@mui/material/colors";

const Home = () => {
    return (
        <div className="home">
            <div className="content-1 roundcontainer">
                <img alt="" src="nokeif-logo.svg" className="home-img"></img>
                <div className="pdb">
                    <Linkbox icon="spotify.png" id="spotify" title="Spotify" url="https://open.spotify.com/artist/3AoiNh85pj8qfchXmgeh43?si=ziPF19-ZT2mLHHpfU2t-Pw" />
                    <Linkbox icon="tiktok.png" id="tiktok" title="TikTok" url="https://www.tiktok.com/@nokeif"/>
                    <Linkbox icon="youtube.png" id="youtube" title="YouTube" url="https://www.youtube.com/channel/UCQmoRPYiVM6dlbOPZoIBtQA"/>
                    <Linkbox icon="applemusic.png" id="apple" title="Apple Music" url="https://music.apple.com/us/artist/nokeif/id1478583810"/>
                </div>
            </div>
        </div>
    );
};

export default Home;
