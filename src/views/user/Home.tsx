import {Component} from "react";
import Header from "../../components/user/Header";
import NavBar from "../../components/user/NavBar";
import Footer from "../../components/user/Footer";
import MainContent from "../../components/user/MainContent";
import Bottom from "../../components/user/Bottom";

class Home extends Component<any, any> {
    render() {
        return (<div>
            <Header/>
            <NavBar/>
            <MainContent/>
            <Bottom/>
            <Footer/>
        </div>)
    }
}

export default Home;