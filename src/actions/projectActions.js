import ProjectAPI from '../api/projectAPI';
export const FETCH_PROJECT_REQUEST = 'FETCH_PROJECT_REQUEST';
function fetchProjectRequest() {
    return { type: FETCH_PROJECT_REQUEST };
}

export const FETCH_PROJECT_SUCCESS = 'FETCH_PROJECT_SUCCESS';
function fetchProjectSuccess(response) {
    return { type: FETCH_PROJECT_SUCCESS, response };
}

export const FETCH_PROJECT_FAILURE = 'FETCH_PROJECT_FAILURE';
function fetchProjectFailure() {
    return { type: FETCH_PROJECT_FAILURE };
}

export const UPDATE_PROJECT_REQUEST = 'UPDATE_PROJECT_REQUEST';
function updateProjectRequest() {
    return { type: UPDATE_PROJECT_REQUEST };
}

export const UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS';
function updateProjectSuccess() {
    return { type: UPDATE_PROJECT_SUCCESS };
}

export const UPDATE_PROJECT_FAILURE = 'UPDATE_PROJECT_FAILURE';
function updateProjectFailure() {
    return { type: UPDATE_PROJECT_FAILURE };
}

export function fetchProjects() {
    return function (dispatch) {
        dispatch(fetchProjectRequest());
        return ProjectAPI.fetchProjects().then((projects) => {
            dispatch(fetchProjectSuccess(projects));
        }).catch(error => {
            dispatch(fetchProjectFailure());
        });
    }
}

export function updateProject(token, project) {
    return function (dispatch) {
        dispatch(updateProjectRequest());
        return ProjectAPI.updateProject(token, project).then((response) => {
            if (response) {
                dispatch(updateProjectSuccess());
            }
            else {
                dispatch(updateProjectFailure());
            }
        }).catch(error => {
            dispatch(updateProjectFailure());
        });
    }
}

