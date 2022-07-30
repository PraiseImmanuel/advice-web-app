import "../styles/Dice.css";
import React from "react";
import { connect } from "react-redux";
import { getData, onMouseLeaveDice, onMouseOverDice, onDiceClick } from "../actions";

class Dice extends React.Component {

    onDiceClick = () => {
        setTimeout(this.props.getData, 1500);
        this.props.onDiceClick();
    };

    render() {
        return(
            <div 
                onMouseEnter={this.props.onMouseOverDice} 
                onMouseLeave={this.props.onMouseLeaveDice}
                onClick={this.onDiceClick}
                className={`dice-container ${this.props.hover ? 'box-shadow' : ''}`}
            >
                <img className={`${this.props.click ? 'dice' : ''}`} src="/images/icon-dice.svg" alt="dice" />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { hover: state.hover, click: state.diceClick.animate }
};

export default connect(mapStateToProps, { getData, onMouseLeaveDice, onMouseOverDice, onDiceClick })(Dice);