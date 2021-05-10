import {Component} from "react";
import {BrowserRouter, Link} from "react-router-dom";

class NavBar extends Component<any, any> {
    render() {
        return (
            <BrowserRouter>
                <div className="e-navbar-wrapper" id="e-navbar-wrapper">
                    <div className="e-navbar">
                        <ul>
                            <li>
                                <Link to="/" className="e-navbar-item e-current"><span/>Home</Link>
                            </li>
                            <li>
                                <Link to="/java" className="e-navbar-item"><span/>Java</Link>
                            </li>
                            <li>
                                <Link to="/python" className="e-navbar-item"><span/>Python</Link>
                            </li>
                            <li>
                                <Link to="/javascript" className="e-navbar-item"><span/>JavaScript</Link>
                            </li>
                            <li>
                                <Link to="/golang" className="e-navbar-item"><span/>Golang</Link>
                            </li>
                            <li>
                                <Link to="/database" className="e-navbar-item"><span/>Database</Link>
                            </li>
                            <li>
                                <Link to="/devops" className="e-navbar-item"><span/>DevOps</Link>
                            </li>
                            <li>
                                <Link to="/about-me" className="e-navbar-item"><span/>About Me</Link>
                            </li>
                        </ul>
                        <div className="e-navbar-icon" onClick={this.toggleResponsive}>
                            Hien thi
                            <i className="fa fa-bars"></i>
                        </div>
                    </div>
                </div>
            </BrowserRouter>);
    }

    toggleResponsive(): void {
        let navbar = document.getElementById("e-navbar");
        if (!navbar)
            return;

        if (navbar && navbar.className === "e-navbar") {
            navbar.className += " responsive";
        } else {
            navbar.className = "e-navbar";
        }
    }
}

export default NavBar;