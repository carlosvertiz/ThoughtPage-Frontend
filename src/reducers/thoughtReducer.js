import {deleteThoughts, editThoughts, postThoughts} from '../management/mySQL.js'

export function thoughtReducer(state , action){
  const {type : actionType, payload : actionPayload} = action


  switch (actionType) {
    case "POST_THOUGHT":
      postThoughts({
      body:actionPayload
      })
    return {
      ...state,
      change : !state.change,
    }
    case "MODIFY_THOUGHT":
      editThoughts({
        id : actionPayload.id, 
        body:{
          thought : actionPayload.thought, 
          categories : actionPayload.categories
        }
      })
      return {
        ...state,
        change : !state.change,
      }
      
    case "ARCHIVE_ELEMENT":
      editThoughts({
        id:actionPayload.id,
        body:{
          views:actionPayload.views
          }
        })
      return {
        ...state,
        change : !state.change,
      }

    case "DELETE_ELEMENT":
      deleteThoughts(actionPayload)
      return {
        ...state,
        change : !state.change,
      }

    default:
      return state
  }
}