import {Component} from "react";
import {BrowserRouter, Link} from "react-router-dom";
import imageAvatar from "../../assets /images/image_01.png";

class Post extends Component<any, any> {
    render() {
        return (<BrowserRouter>
            <div className="e-post-content__box">
                <div className="e-post-content__box__header">
                    <h3><Link to="/" className="e-post-content__box__header__title">Thấy con khóc òa, mắt mẹ lệ nhòa,
                        cám ơn vì con đến bên mẹ, này con yêu ơi , con biết không, mẹ yêu con , yêu con rất nhiều</Link></h3>
                    <div className="e-post-content__box__header__tag">
                        <strong>Tags:</strong>
                        <Link to="">Java,&nbsp;</Link>
                        <Link to="">Python,&nbsp;</Link>
                        <Link to="">JavaScript&nbsp;</Link>
                    </div>
                    <span className="e-post-content__box__header__posted-date">
                        11 May
                        <strong>2021</strong>
                    </span>
                </div>
                <Link to=""><img src={imageAvatar}/></Link>
                <div className="e-post-content__box__short-content">
                    <p>Praesent mattis varius quam. Vestibulum ullamcorper ipsum nec augue. Vestibulum auctor odio eget
                        ante. Nunc commodo, magna pharetra semper vehicula, dui ligula feugiat elit, et euismod nunc
                        orci ut libero. Etiam sodales massa vel metus. Mauris et elit quis mauris aliquet luctus.</p>
                    <div className="e-post-content__box__short-content__go-post"><Link to="">Go post</Link></div>
                </div>
                <div className="e-cleaner"></div>
            </div>
        </BrowserRouter>);
    }
}

export default Post;