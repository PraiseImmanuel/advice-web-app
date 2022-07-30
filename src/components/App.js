import "../styles/App.css"
import "../styles/Attribution.css";
import React from "react";
import Attribution from "./Attribution";
import CursorFollower from "./CursorFollower";
import AdviceCard from "./AdviceCard";


class App extends React.Component {
    componentDidMount() {
        //fix cursor follower overflow
        document.querySelector('body').style.overflow = 'hidden';
    };

    render() {
        return(
            <div className="entire-container">
                <CursorFollower />
                <Attribution />
                <div className="centered"><AdviceCard /></div>
            </div>
        );
    }
};

export default App;