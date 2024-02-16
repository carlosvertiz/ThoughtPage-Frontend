import {useReducer} from "react"


export function useButtonState({reducer, initialState}){
  const [stateButton, dispatchButton] = useReducer(reducer, initialState);

  function editClick(){
    dispatchButton({type:"EDIT_ELEMENTS", payload: !stateButton.editable})
  }

  function deleteClick({event, onDeleteFunction}){
    onDeleteFunction({id: stateButton.id})
    dispatchButton({type:"DELETE_ELEMENTS", payload: event.target.value})
  }

  function archichiveClick({ onArchiveFunction}){
    onArchiveFunction({id: stateButton.id, views: stateButton.views? 0 : 1})
    dispatchButton({type:"ARCHIVE_ELEMENTS", payload: stateButton.views? 0 : 1})
  }

  return {stateButton, editClick, deleteClick, archichiveClick}
}