import { TOGGLE_FAVORITE, TOGGLE_LISTENED } from './actions';

const playListData = require('./data/playListDB.json');

const initialState = playListData.playlist;


const reducer = (state = initialState, action)=> {
    // console.log('trackedId in reducer', action.payload)
    switch(action.type) {
        case TOGGLE_LISTENED:{
            const {trackedId} = action.payload;
            const newList = state.map( (track) => {
                if (track.id === trackedId) {
                   return {
                    ...track,
                    listened: !track.listened
                    } 
                } else {
                    return track;
                }
            })
            return  newList;
            }
    
        case TOGGLE_FAVORITE: {
            const {trackedId} = action.payload;
            const newList = state.map(track => {
                if (track.id === trackedId){
                    return {
                        ...track,
                        favorite: !track.favorite
                    }
                }else {
                    return track;
                }
            })
            return newList;
        }
        default:
            return state;
    }
}

export default reducer;