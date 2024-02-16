import { useReducer } from "react"  

export function useFilter({reducer, initialState}){
  const [stateFilter, dispatch] = useReducer(reducer, initialState)

  function changeView(){
    dispatch({type:"CHANGE_VIEW"})
  }
  function changeCategory(value){
    console.log(value)
    dispatch({type:"FILTER_CATEGORY", payload: value})
  }
  return {stateFilter, changeView, changeCategory}
}