import {useState} from "react";

const SignIn = ({isOpenSignInPopup}) => {
    const [isCloseSignInPopup, setSignInPopupState] = useState(false);
    const cancelSignIn = () => {
        setSignInPopupState(!isCloseSignInPopup);
    }

    return (
        <div className={`${!isOpenSignInPopup ? "e-sign-in-show__active" : ""} e-sign-in-show`}>
            <div id="e-signin-logo"></div>
            <div id="e-username-or-email">
                <input type="text"/>
            </div>
            <div id="e-password">
                <input type="password"/>
            </div>
            <button>SignIn</button>
            <button onClick={cancelSignIn}>Cancel</button>
        </div>);
}

export default SignIn;
