import axios from "axios";

//||||| Fetch API |||||//

export const  getData = () => async dispatch => {
      const onSuccess = (response) => {
        dispatch({ 
            type: 'GET_DATA',
            payload: {
                advice: response.data.slip.advice,
                adviceId: response.data.slip.id,
                onFetchData: true
            }
        });
        return response;
      }

      const onError = (error) => {
        dispatch({
            type: 'ERROR',
            payload: {
                advice: 'Please check network and roll dice again',
                onFetchData: true
            }
        });
        return error;
      }

      try {
        const response = await axios.get('https://api.adviceslip.com/advice');
        return onSuccess(response);
      } catch (error) {
        return onError(error);
      }
}


//||||| Cursor Follower Actions |||||//

export const moveCursor = (event) => {
    return {
        type: 'MOVE_CURSOR',
        payload: {
            horizontalMove: event.pageX + 'px', 
            verticalMove: event.pageY + 'px'
        }
    };
};

export const cursorStyle = () => {
    return{
        type: 'DEFAULT_CURSOR_STYLE',
        payload: {
            margin: '-0.9rem 0 0 -0.9rem', 
            size: '1.8rem'
        }
    };
};

export const changeCursorStyle = () => {
    return{
        type: 'CHANGE_CURSOR_STYLE',
        payload: {
            margin: '-1.8rem 0 0 -1.8rem',
            opacity: 0.4,
            size: '3.6rem'
        }
    };
};

//||||| Attribution Actions |||||//

export const hideAttrContent = () => {
    return{
        type: 'HIDE_CONTENT',
        payload: {
            visiblity: 'hidden',
            opacity: 0
        }
    };
};

export const showAttrContent = () => {
    return{
        type: 'SHOW_CONTENT',
        payload: {
            visiblity: 'visible',
            opacity: 1
        }
    };
};

//||||| Dice Actions |||||//

export const onMouseOverDice = () => {
    return{
        type: 'MOUSE_OVER_DICE',
        payload: true
    };
};


export const onMouseLeaveDice = () => {
    return{
        type: 'MOUSE_LEAVE_DICE',
        payload: false
    };
};


export const onDiceClick = () => {
    return{
        type: 'DICE_CLICK',
        payload: {animate: true}
    };
};

//stop dice animation
export const onFetchData = (isDataFetched) => {
    return{
        type: 'DATA_FETCHED',
        payload: {animate: !isDataFetched}
    };
};
