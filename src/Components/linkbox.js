// import {
//     BrowserRouter as Router,
//     Link,
//   } from "react-router-dom";

const Linkbox = (props) => {
    return (
        <div>
            <div id={props.id} className="linkbox maxw-400">
                <a className="linkbox-link" href={props.url} target="_blank">{props.title}</a>
            </div>
        </div>

    );
};

export default Linkbox;
