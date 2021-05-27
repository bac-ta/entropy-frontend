import {Component} from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import Bottom from "../components/Bottom";

class Home extends Component {
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