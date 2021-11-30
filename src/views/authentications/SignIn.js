const SignIn = () => {
    return (
        <div>
            <div className="e-sign-in">
                <div id="e-signin-logo"></div>
                <div id="e-username-or-email">
                    <input type="text"/>
                </div>
                <div id="e-password">
                    <input type="password"/>
                </div>
                <button>SignIn</button>
                <button>Cancel</button>
            </div>
        </div>);
}

export default SignIn;
