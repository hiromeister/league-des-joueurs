import {DISPLAY_LIST, ADD_TEAM } from "./actions";

const initialState = {
    team: []
};

const TeamListReducer = ( state = initialState, actions) => {
    console.log(actions)
    switch(actions.type){
        case DISPLAY_LIST:
        return{
            ...state,
             team : [...state.team, ...actions.payload]
        }

        case ADD_TEAM:
            return {
                ...state, team : [...state.team, actions.payload]
            }
        default:
        return state;
    }
}

export default TeamListReducer;