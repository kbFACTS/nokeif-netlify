// import {
//     BrowserRouter as Router,
//     Link,
//   } from "react-router-dom";

const Linkbox = (props) => {
    return (
        <div>
            <div id={props.id} className="linkbox shadow">
                <a className="linkbox-link" href={props.url} rel="noreferrer" target="_blank">
                    <img alt="" src={props.icon} className="icon"></img>
                    <div className="link-title">{props.title}</div>
                </a>
            </div>
        </div>

    );
};

export default Linkbox;
