import {Component} from "react";

class Home extends Component<any, any> {
    render() {
        return (<div className="body-wrapper">
            <p>Hello world</p>
            <div className="ticker-wrap"></div>
            <div className="header-wrap"></div>
            <div className="tm-menu"></div>
            <div className="body-row" id="content-wrapper"></div>
            <div id="lower">
                <div className="body-row" id="lower-wrapper"></div>
                <div id="ty__footer">
                </div>
            </div>
        </div>)
    }
}

export default Home;