import {
    FETCH_PROJECT_REQUEST,
    FETCH_PROJECT_SUCCESS,
    FETCH_PROJECT_FAILURE
} from '../actions/projectActions.js';

const initialState = {
    projects: [],
    isLoading: true
};
export function ProjectReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PROJECT_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case FETCH_PROJECT_SUCCESS:
            return Object.assign({}, state, {
                projects: action.response.projects,
                isLoading: false
            });
        case FETCH_PROJECT_FAILURE:
            return Object.assign({}, state, {
                isLoading: true
            });
        default:
            return state;
    }
}