import {Component} from "react";
import {BrowserRouter, Link} from "react-router-dom";
import imageAvatar from "../assets /images/image_01.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

class SideBar extends Component {
    render() {
        return (<div className="e-side-bar-box">
            <h3>
                Recent Posts
            </h3>
            <BrowserRouter>
                <div className="e-side-bar-box__content">
                    <div className="e-side-bar-box__content__recent-post">
                        <Link to=""><img src={imageAvatar} /></Link>
                        <h6><Link to="/" className="e-side-bar-box__content__recent-post__title">Thấy con khóc òa, mắt
                            mẹ lệ nhòa, cám ơn vì con đến bên mẹ, này con yêu ơi , con biết không, mẹ yêu con , yêu con
                            rất nhiều</Link>

                        </h6>
                    </div>
                    <div className="e-side-bar-box__content__recent-post">
                        <Link to=""><img src={imageAvatar} /></Link>
                        <h6><Link to="/" className="e-side-bar-box__content__recent-post__title">Thấy con khóc òa, mắt
                            mẹ lệ nhòa, cám ơn vì con đến bên mẹ, này con yêu ơi , con biết không, mẹ yêu con , yêu con
                            rất nhiều</Link>

                        </h6>
                    </div>
                    <div className="e-side-bar-box__content__recent-post">
                        <Link to=""><img src={imageAvatar} /></Link>
                        <h6><Link to="/" className="e-side-bar-box__content__recent-post__title">Thấy con khóc òa, mắt
                            mẹ lệ nhòa, cám ơn vì con đến bên mẹ, này con yêu ơi , con biết không, mẹ yêu con , yêu con
                            rất nhiều</Link>

                        </h6>
                    </div>
                </div>
            </BrowserRouter>
            <h3>Categories</h3>
            <BrowserRouter>
                <div className="e-side-bar-box__content">
                    <ul className="e-side-bar-box__content__menu">
                        <li className="e-side-bar-box__content__menu__item">
                            <FontAwesomeIcon
                                icon={faChevronRight} className="category-parent-icon"/>
                            Languages
                            <ul>
                                <li className="e-side-bar-box__content__menu__item__children"><Link to="">Java</Link>
                                </li>
                                <li className="e-side-bar-box__content__menu__item__children"><Link to="">Python</Link>
                                </li>
                                <li className="e-side-bar-box__content__menu__item__children"><Link
                                    to="">JavaScript</Link></li>
                                <li className="e-side-bar-box__content__menu__item__children"><Link to="">Golang</Link>
                                </li>
                                <li className="e-side-bar-box__content__menu__item__children"><Link to="">Kotlin</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="e-side-bar-box__content__menu__item">
                            <FontAwesomeIcon
                                icon={faChevronRight} className="category-parent-icon"/>
                            Databases
                            <ul>
                                <li className="e-side-bar-box__content__menu__item__children"><Link to="">MySQL</Link>
                                </li>
                                <li className="e-side-bar-box__content__menu__item__children"><Link
                                    to="">PostgreSQL</Link></li>
                                <li className="e-side-bar-box__content__menu__item__children"><Link
                                    to="">SqlServer</Link></li>
                                <li className="e-side-bar-box__content__menu__item__children"><Link to="">MongoDB</Link>
                                </li>
                                <li className="e-side-bar-box__content__menu__item__children"><Link
                                    to="">DynamoDB</Link></li>
                                <li className="e-side-bar-box__content__menu__item__children"><Link
                                    to="">Cassandra</Link></li>
                            </ul>
                        </li>
                        <li className="e-side-bar-box__content__menu__item"><FontAwesomeIcon
                            icon={faChevronRight} className="category-parent-icon"/>Caches
                            <ul>
                                <li className="e-side-bar-box__content__menu__item__children"><Link to="">Redis</Link>
                                </li>
                                <li className="e-side-bar-box__content__menu__item__children"><Link
                                    to="">Aerospike</Link></li>
                            </ul>
                        </li>
                        <li className="e-side-bar-box__content__menu__item"><FontAwesomeIcon
                            icon={faChevronRight} className="category-parent-icon"/>DevOps
                            <ul>
                                <li className="e-side-bar-box__content__menu__item__children"><Link
                                    to="">Container</Link></li>
                                <li className="e-side-bar-box__content__menu__item__children"><Link to="">CI/CD</Link>
                                </li>
                                <li className="e-side-bar-box__content__menu__item__children"><Link to="">Cloud</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="e-side-bar-box__content__menu__item"><FontAwesomeIcon
                            icon={faChevronRight} className="category-parent-icon"/>BigData
                            <ul>
                                <li className="e-side-bar-box__content__menu__item__children"><Link to="">Search
                                    Engine</Link></li>
                                <li className="e-side-bar-box__content__menu__item__children"><Link to="">System
                                    Queue</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </BrowserRouter>
            <h3>Archives</h3>
            <BrowserRouter>
                <div className="e-side-bar-box__content">
                    <ul className="e-side-bar-box__content__menu">
                        <li>Programming Languages</li>
                        <li>Database</li>
                        <li>DevOps</li>
                    </ul>
                </div>
            </BrowserRouter>
        </div>);
    }
}

export default SideBar;