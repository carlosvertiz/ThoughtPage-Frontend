import {useReducer} from "react"

export  function useButtons({reducer, initialState}) {
  const [state, dispatchThought] = useReducer(reducer, initialState);

  function postThought(value){
    dispatchThought( { 
      type: "POST_THOUGHT",
      payload: {
      thought: value.thought, 
      categories: value.categories ?? "",
      } 
    });
  }

  function editThought(value){
    dispatchThought( { 
      type: "MODIFY_THOUGHT",
      payload: {
      id: value.id,
      thought: value.thought, 
      categories: value.categories ?? "",
      } 
    });
  }
  
  function deleteThought(value){
    dispatchThought( { 
      type: "DELETE_ELEMENT",
      payload: {
      id: value.id,
      } 
    });
  }

  function archiveThought({id, views}){
    dispatchThought( { 
      type: "ARCHIVE_ELEMENT",
      payload: {
      id,
      views,
      } 
    });
  }

  return {state ,postThought ,editThought, deleteThought, archiveThought}
}


