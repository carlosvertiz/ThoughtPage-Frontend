export const initialState = {
  thought: '',
  categories: '',
  error: true
};

export const textReducer  = (state = initialState, action) => {
  const {type : actionType, payload : actionPayload} = action
  switch (actionType) {
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: actionPayload
      };
    case "ADD_THOUGHT":
      return {
        ...state,
        thought: actionPayload
      } ;     
    case "SET_ERROR":
      return {
        ...state,
        error:actionPayload
      } ;   
    case "RESET_FORM":
      return initialState
    default:
      return state
  }
}