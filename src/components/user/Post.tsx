import {Component} from "react";
import {BrowserRouter, Link} from "react-router-dom";

class Post extends Component<any, any> {
    render() {
        return (<BrowserRouter>
            <div className="e-post-content__box">
                <div className="e-post-content__box__header">
                    <h2><Link to="/">Title</Link></h2>
                    <div className="e-post-content__box__header__tag">
                        <strong>Tags:</strong>
                        <Link to="">Java</Link>
                        <Link to="">Python</Link>
                        <Link to="">JavaScript</Link>
                    </div>
                    <span className="e-post-content__box__header__posted-date">
                        11 May
                        <strong>2021</strong>
                    </span>
                </div>
                <img/>
                <div className="e-post-content__box__short-content">
                    <p>Short content</p>
                    <div className="e-post-content__box__short-content__read-more">Read more</div>
                </div>
                <div className="e-cleaner"></div>
            </div>
        </BrowserRouter>);
    }
}

export default Post;