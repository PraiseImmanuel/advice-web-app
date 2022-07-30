import { combineReducers } from "redux";

//Advice Content Reducer
const adviceReducer = (state = [], action) => {
    switch (action.type) {
     case 'GET_DATA': 
         return action.payload;
    case 'ERROR': 
        return action.payload;
     default:
         return state;
     }
};

//Cursor Follower Reducer
const moveCursorReducer = (state = {horizontalMove: '80px', verticalMove: '90px'}, action) => {
    switch (action.type) {
     case 'MOVE_CURSOR': 
         return action.payload;
     default:
         return state;
     }
};

const changeCursorReducer = (state = { margin: '-0.9rem 0 0 -0.9rem', size: '1.8rem' }, action) => {
    switch(action.type) {
        case 'CHANGE_CURSOR_STYLE':
            return action.payload;
        case 'DEFAULT_CURSOR_STYLE':
            return action.payload;
        default :
            return state;
    }
};

//Attribution Reducer
const displayReducer = (state = {visiblity: 'hidden', opacity: 0}, action) => {
    switch(action.type){
        case 'HIDE_CONTENT': 
            return action.payload;
        case 'SHOW_CONTENT': 
            return action.payload;
        default:
            return state;
    }
};


//Dice Reducers
const hoverDiceReducer = (state = false, action) => {
    switch(action.type){
        case 'MOUSE_OVER_DICE': 
            return action.payload;
        case 'MOUSE_LEAVE_DICE': 
            return action.payload;
        default:
            return state;
    }
};

const diceClickReducer = (state = {animate: false}, action) => {
    switch(action.type){
        case 'DICE_CLICK':
            return action.payload;
        case 'DATA_FETCHED':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    adviceData: adviceReducer,
    cursorPosition: moveCursorReducer,
    cursorSize: changeCursorReducer,
    display: displayReducer,
    hover: hoverDiceReducer,
    diceClick: diceClickReducer
});