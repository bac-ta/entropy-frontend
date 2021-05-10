import {Component} from "react";
import Header from "../../components/user/Header";
import NavBar from "../../components/user/NavBar";
import Footer from "../../components/user/Footer";
import Content from "../../components/user/Content";

class Home extends Component<any, any> {
    render() {
        return (<div>
            <Header/>
            <NavBar/>
            <Content/>
            <Footer/>
        </div>)
    }
}

export default Home;