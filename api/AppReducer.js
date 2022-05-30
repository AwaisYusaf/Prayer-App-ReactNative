const AppReducer = (state, action) => {
  switch (action.type) {
    case "LOAD":
      return action.payload;
    case "UPDATE_OBJECT":
      let isUpdated = false;
      let updatedState = [];
      const objDate = Object.keys(action.payload)[0];
      for (let i = 0; i < state.length; i++) {
        if (Object.keys(state[i])[0] != objDate) {
          updatedState.push(state[i]);
        } else {
          updatedState.push(action.payload);
          isUpdated = true;
        }
      }
      if (!isUpdated) {
        updatedState.push(action.payload);
      }
      return updatedState;
    default:
      return state;
  }
};
export default AppReducer;
