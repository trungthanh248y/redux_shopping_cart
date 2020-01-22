import * as Types from '../constants/ActionType';
import * as mess from '../constants/Message';
const initialState = mess.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch(action.type) {
        case Types.CHANGE_MESSAGE:
            return action.message;
        default: return state;
    }
}

export default message;