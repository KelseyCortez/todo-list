export const SET_VISIBILITY = 'SET_VISIBILITY';

//anything that isn't type is the payload
export const setVisibility = (status) => {
    return {
        type: SET_VISIBILITY,
        // status is the payload
        status
    }
}
