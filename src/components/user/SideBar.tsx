import {Component} from "react";
import {BrowserRouter, Link} from "react-router-dom";

class SideBar extends Component<any, any> {
    render() {
        return (<div className="e-side-bar__box">
            <h3>Categories</h3>
            <div className="e-side-bar__box__content">
                <ul className="e-side-bar__box__content__menu">
                    <BrowserRouter>
                        <li>
                            <Link to="">DevOps</Link>
                        </li>
                    </BrowserRouter>
                </ul>
            </div>
        </div>);
    }
}

export default SideBar;