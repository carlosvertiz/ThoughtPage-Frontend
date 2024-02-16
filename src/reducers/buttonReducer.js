export const buttonInitialState ={
  views: 1,
  state: true,
  editable: false
}

export function buttonReducer(state = buttonInitialState, action){
  const {type : actionType, payload : actionPayload} = action
  switch (actionType) {
    case "EDIT_ELEMENTS":
      return {
        ...state,
        editable: actionPayload,
      };
    case "ARCHIVE_ELEMENTS":
      return {
        ...state,
      } ;   
    case "DELETE_ELEMENTS":
      return {
        ...state,
      } ;   
    default:
      return state
  }
}