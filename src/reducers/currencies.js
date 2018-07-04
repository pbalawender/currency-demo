import * as actions from '../actions';

const defaultState = {
};

export default (state = defaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        default:
            return state;
    }
}
