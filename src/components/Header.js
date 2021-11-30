import twitterIcon from "../assets /images/icon_twitter.png";
import facebookIcon from "../assets /images/icon_facebook.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const clickSignIn = () => {

    }

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
            <div className="e-account">
                <button className="e-account__signup">Sign Up</button>
                <button className="e-account__signin" onClick={clickSignIn}>Sign In</button>
            </div>
            <div className="e-search-box">
                <form>
                    <input type="text" className="e-search-input"/>
                    <div className="e-search-button"><FontAwesomeIcon icon={faSearch} size="2x"></FontAwesomeIcon>
                    </div>
                </form>
            </div>
        </div>
        <div className="e-cleaner"/>
    </div>);

}

export default Header;
