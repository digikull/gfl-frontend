export default function reducer(state = {}, action) {
  switch (action.type) {
    case "ADD_TODO": {
      const updatedState = {
        ...state,
        todoDetails: [...state.todoDetails, action.payload]
      };
      return updatedState;
    }
        default:
      return state;
  }
}
