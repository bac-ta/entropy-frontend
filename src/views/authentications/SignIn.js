const SignIn = ({isShowSignIn}) => {
    return (
        <div className={`${!isShowSignIn ? "e-signin-show__active" : ""} e-sigin-show`}>
            <div className="e-sign-in">
                <p>Hello world</p>
                <div id="e-signin-logo"></div>
                <div id="e-username-or-email"></div>
                <div id="e-password"></div>
                <button>SignIn</button>
                <button>Cancel</button>
            </div>
        </div>);
}

export default SignIn;
