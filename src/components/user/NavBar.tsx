import {Component} from "react";

class NavBar extends Component<any, any> {
    render() {
        return (
            <div className="e-navbar-wrapper">
                <div id="e-navbar">
                    <ul>
                        <li>
                            <div className="e-navbar-tab"><a>Home</a></div>
                        </li>
                        <li>
                            <div className="e-navbar-tab"><a>Java</a></div>
                        </li>
                        <li>
                            <div className="e-navbar-tab"><a>Python</a></div>
                        </li>
                        <li>
                            <div className="e-navbar-tab"><a>JavaScript</a></div>
                        </li>
                        <li>
                            <div className="e-navbar-tab"><a>C#</a></div>
                        </li>
                        <li>
                            <div className="e-navbar-tab"><a>Go lang</a></div>
                        </li>
                        <li>
                            <div className="e-navbar-tab"><a>Database</a></div>
                        </li>
                        <li>
                            <div className="e-navbar-tab"><a>DevOps</a></div>
                        </li>
                        <li>
                            <div className="e-navbar-tab"><a>About me</a></div>
                        </li>
                    </ul>
                </div>
            </div>);
    }
}

export default NavBar;