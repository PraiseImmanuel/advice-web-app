import "../styles/AdviceContent.css";
import React from "react";
import { connect } from "react-redux";
import { getData, onFetchData } from "../actions";
class AdviceContent extends React.Component {

    componentDidUpdate() {
        //stop animation
        this.props.onFetchData(this.props.dataFetched);
    }

    render() {
        //content to be rendered when component is first rendered
        const text1 =  "Seeking Insight?";
        const text2 = "Roll the Dice";

        return(
            <div>
                <p className="advice-num">Advice <span>#{this.props.adviceId}</span></p>
                <div className="advice-content">
                    {this.props.advice === undefined ? <p>{text1}<span className="span">{text2}</span></p> : this.props.advice}
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {advice: state.adviceData.advice, adviceId: state.adviceData.adviceId, dataFetched: state.adviceData.onFetchData}
};

export default connect(mapStateToProps, { getData, onFetchData })(AdviceContent);