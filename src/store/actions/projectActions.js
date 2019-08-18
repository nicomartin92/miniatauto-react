export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Nico',
            authorLastName: 'Modelcars',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE__PROJECT', project: project });
        }).catch((err) => {
            dispatch({ type: 'CREATE__PROJECT__ERROR', err });
        });  
    }
};