export const DISPLAY_LIST = "DISPLAY_LIST";
export const ADD_TEAM = "ADD_TEAM";

export const fetchList = () => async dispatch => {
  const url = "./api.json";
  const d = await fetch(url);
  const data = await d.json();
  dispatch(displayList(data));
};

export const displayList = data => {
  return {
    type: DISPLAY_LIST,
    payload: data.team
  };
};

export const addTeam = (id, name) => {
    return {
        type: ADD_TEAM,
        payload: {
          id,
          name,
          joueurs : []
        }
    }
}