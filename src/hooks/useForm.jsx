import {useReducer, useEffect, useRef } from "react"

export  function useForm ({reducer, initialState}){
  const [state, dispatch] = useReducer(reducer, initialState);
  const firstInput = useRef(true)
  
  async function  submitForm({event, thoughtAction}){
    event.preventDefault()
    await thoughtAction({thought:state.thought, categories: state.categories})
    console.log("despues de enviar")
    firstInput.current = true
    dispatch({type:"RESET_FORM"})
  }

  async function editForm({event, thoughtAction, id}){
    event.preventDefault()
    await thoughtAction({id , thought:state.thought, categories: state.categories})
    firstInput.current = true
  }

  function handleChangeThought(event){
    dispatch({type:"ADD_THOUGHT", payload: event.target.value})
  }

  function handleChangeCategory(event){
    dispatch({type:"ADD_CATEGORY", payload: event.target.value})
  }

  useEffect(() => {

    if (firstInput.current){
      firstInput.current = state.thought == ''
      if (!firstInput.current){
        dispatch({
          type:"SET_ERROR", 
          payload: false
        })
      } else{
        return
      }
      
    }
    if (state.thought == '') {
      dispatch({
        type:"SET_ERROR", 
        payload: "Thought can't be empty"
      })
      return;
    }

    if (state.thought.startsWith(" ")) {
      dispatch({
        type:"SET_ERROR", 
        payload: "Thought can't start with an empty space"
      })
      return;
    }

    dispatch({
      type:"SET_ERROR", 
      payload: false
    })

  },[state.thought])


  return {submitForm, editForm ,handleChangeThought ,handleChangeCategory, state}

}

