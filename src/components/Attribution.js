import "../styles/Attribution.css";
import { connect } from "react-redux";
import { hideAttrContent, showAttrContent, cursorStyle, changeCursorStyle } from "../actions"

import React from "react";

class Attribution extends React.Component {
    render() {
        return(
            <div 
                className="attribution-container" 
                onMouseEnter={this.props.showAttrContent} 
                onMouseLeave={this.props.hideAttrContent}
            >
                <div 
                    className="avatar"
                    onMouseEnter={this.props.changeCursorStyle} 
                    onMouseLeave={this.props.cursorStyle}>
                   <a rel="noopener noreferrer" href="https://www.behance.net/praise_immanuel2" target="_blank"><img className="round" src="https://avatars.githubusercontent.com/u/99152269?s=96&v=4" alt="avatar" /></a>
                </div>

                <div 
                    style={{
                        visibility: `${this.props.visiblity}`, 
                        opacity: `${this.props.opacity}`
                    }} 
                    className="attribution-content">
                    <p>Challenge by: <a className="green-link" rel="noopener noreferrer" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor.</a></p>
                    <p>Developed by: <a className="green-link" rel="noopener noreferrer" href="https://github.com/PraiseImmanuel" target="_blank">PraiseImmanuel.</a></p>
                </div>
            </div>
        );
    }
    
};

const mapStateToProps = (state) => {
    return{ visibility: state.display.visibility, opacity: state.display.opacity };
};

export default connect(mapStateToProps, { hideAttrContent, showAttrContent, cursorStyle, changeCursorStyle })(Attribution);