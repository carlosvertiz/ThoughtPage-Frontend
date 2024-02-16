export const filerInitialState = {
  views: 1,
  categories: ""
}

export function filterReducer(state = filerInitialState, action) {
  const {type : actionType, payload : actionPayload} = action
  switch (actionType ){
    case 'CHANGE_VIEW':
      return {
        ...state,
        views: state.views === 1? 0 : 1
      };
    case 'FILTER_CATEGORY':
      return {
        ...state,
        categories: actionPayload
      };
    
    default:
      return

  }
}