import {Component} from "react";
import Post from "./Post";
import SideBar from "./SideBar";

class MainContent extends Component<any, any> {
    render() {
        return (<div id="e-content-wrapper">
            <span className="e-tm-bottom"></span>
            <div id="e-post-content">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
            <div id="e-side-bar">
                <SideBar/>
            </div>
            <div className="e-cleaner"></div>
        </div>);
    }
}

export default MainContent;