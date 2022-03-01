import rotateAction from "./action";

const initialState = {
    rotating: true
};

export default function rotateReducer(state = initialState, action) {
    switch (action.type) {
        case rotateAction.TOGGLE_ROTATION:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}