import {deleteThoughts, editThoughts, postThoughts} from '../management/mySQL.js'

export async function thoughtReducer(state , action){
  const {type : actionType, payload : actionPayload} = action


  switch (actionType) {
    case "POST_THOUGHT":
      await postThoughts({
      body:actionPayload
      })
    return {
      ...state,
      change : !state.change,
    }
    case "MODIFY_THOUGHT":
      await editThoughts({
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
      await editThoughts({
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
      await deleteThoughts(actionPayload)
      return {
        ...state,
        change : !state.change,
      }

    default:
      return state
  }
}