import {Component} from "react";
import twitterIcon from "../../assets /images/icon_twitter.png";
import facebookIcon from "../../assets /images/icon_facebook.png";

class Header extends Component<any, any> {
    render() {
        return (<div id="e-header">
            <div id="e-site-title">
                <a href="#">SOFTWARE TECHNOLOGY BLOG</a>
            </div>
            <div id="e-header-right">
                <a href="#">
                    <img src={facebookIcon}/>
                </a>
                <a href="#">
                    <img src={twitterIcon}/>
                </a>
                <div id="e-search-box">
                    <form>
                        <input type="text" id="e-search-input"/>
                        <button>Search</button>
                    </form>
                </div>
            </div>
            <div className="e-cleaner"/>
        </div>);
    }
}

export default Header;