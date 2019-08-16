export const createProject = (project) => {
    return (dispatch, getState) => {
        dispatch({ type: 'CREATE__PROJECT', project: project });
    }
};