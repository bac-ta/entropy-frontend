import {Component} from "react";

class Header extends Component<any, any> {
    render() {
        return (<div id="header">
            <div className="header__logo-wrap">
                <div className="header__site-description"></div>
                <div className="header__social-media-icon"></div>
            </div>
            <div className="header__secondary-navigation"></div>
        </div>);
    }
}