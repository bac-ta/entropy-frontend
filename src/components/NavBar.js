import {Component} from "react";
import {BrowserRouter, Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <BrowserRouter>
                <div id="e-navbar-wrapper">
                    <div id="e-navbar">
                        <ul>
                            <li>
                                <Link to="/" className="e-navbar-item e-current"><span/>Home</Link>
                            </li>
                            <li>
                                <Link to="/databases-caches" className="e-navbar-item"><span/>Languages</Link>
                            </li>
                            <li>
                                <Link to="/databases" className="e-navbar-item"><span/>Databases</Link>
                            </li>
                            <li>
                                <Link to="/caches" className="e-navbar-item"><span/>Caches</Link>
                            </li>
                            <li>
                                <Link to="/devops" className="e-navbar-item"><span/>DevOps</Link>
                            </li>
                            <li>
                                <Link to="/bigdata" className="e-navbar-item"><span/>BigData</Link>
                            </li>
                            <li>
                                <Link to="/stories" className="e-navbar-item"><span/>Stories</Link>
                            </li>
                            <li>
                                <Link to="/about-me" className="e-navbar-item"><span/>About Me</Link>
                            </li>
                        </ul>
                        <div className="e-navbar-icon" onClick={this.toggleResponsive}>
                            Hien thi
                            <i className="fa fa-bars"/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>);
    }

    toggleResponsive = () => {
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