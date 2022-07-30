import "../styles/CursorFollower.css";
import React from "react";
import { connect } from "react-redux";
import { moveCursor, cursorStyle } from "../actions"


class CursorFollower extends React.Component{
    //initialize cursor follower 
    componentDidMount() {
        document.addEventListener('mousemove', (event) => {
            this.props.moveCursor(event);
        });
    };

    render() {
        return(
            <div 
            style={{transform: `translate3d(${this.props.horizontalMove},${this.props.verticalMove}, 0px)`,
                margin: `${this.props.margin}`,  
                width: `${this.props.size}`,
                height: `${this.props.size}`,
                opacity: `${this.props.opacity}`
            }} 
            className="cursor-follower" >
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    // Moves represent the current cursor position || Margin place the cursor on the center of the cursor follower || size represent size
    return {
        horizontalMove: state.cursorPosition.horizontalMove,
        verticalMove: state.cursorPosition.verticalMove,
        margin: state.cursorSize.margin, 
        size: state.cursorSize.size,
        opacity: state.cursorSize.opacity
    };
};

export default connect(mapStateToProps, { moveCursor, cursorStyle })(CursorFollower);