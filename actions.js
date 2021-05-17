export const TOGGLE_LISTENED = "TOGGLE_LISTENED";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const toggleListenedAction = (trackedId) => {
    // console.log('trackedId in actions', trackedId)
    return {
        type: TOGGLE_LISTENED,
        payload: {trackedId}
        
    }; 
}

export const toggleFavoriteAction = (trackedId) => {
    return {
        type: TOGGLE_FAVORITE,
        payload: {trackedId}
    }
}